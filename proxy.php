<?php
$url = $_GET['url'] ?? '';
if (!$url || !filter_var($url, FILTER_VALIDATE_URL)) {
    http_response_code(400);
    echo "Missing or invalid URL.";
    exit;
}

// Headers for the request to Abwaab
$headers = [
    "Referer: https://abwaab.com/",
    "User-Agent: Mozilla/5.0"
];

// Curl request
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HEADER, false);

$contentType = null;
curl_setopt($ch, CURLOPT_HEADERFUNCTION, function($ch, $header) use (&$contentType) {
    if (stripos($header, 'Content-Type:') !== false) {
        $contentType = trim(substr($header, strlen('Content-Type:')));
    }
    return strlen($header);
});

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// تعيين نوع المحتوى
if ($contentType) {
    header("Content-Type: $contentType");
}
http_response_code($httpCode);

// ✅ تعديل روابط m3u8 داخليًا
$parsedUrl = parse_url($url);
$baseUrl = $parsedUrl['scheme'] . '://' . $parsedUrl['host'];
if (isset($parsedUrl['port'])) $baseUrl .= ':' . $parsedUrl['port'];

$dirname = dirname($parsedUrl['path']);
$prefix = $baseUrl . $dirname;

if (strpos($contentType, 'application/vnd.apple.mpegurl') !== false || strpos($url, '.m3u8') !== false) {
    // ✨ عدّل الروابط الداخلية داخل m3u8 (ts / key / m3u8)
    $response = preg_replace_callback('/^(?!#)(.+)$/m', function ($matches) use ($prefix) {
        $line = trim($matches[1]);
        if (filter_var($line, FILTER_VALIDATE_URL)) {
            return "proxy.php?url=" . urlencode($line);
        } else {
            $absolute = rtrim($prefix, '/') . '/' . ltrim($line, '/');
            return "proxy.php?url=" . urlencode($absolute);
        }
    }, $response);
}

echo $response;
