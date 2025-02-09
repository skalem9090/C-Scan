function showContent(contentId) {
    const content = {
        registerDevice: '<h2>Register Device</h2><p>Content for Register Device</p>',
        registeredDevices: '<h2>Registered Devices</h2><p>Content for Registered Devices</p>',
        storageDatabase: '<h2>Storage Database</h2><p>Content for Storage Database</p>',
        other: '<h2>Other</h2><p>Content for Other</p>',
        qrCodesAndTags: '<h2>QR Codes and Tags</h2><p>Content for QR Codes and Tags</p>',
        settings: '<h2>Settings</h2><p>Content for Settings</p>'
    };
    document.getElementById('viewport').innerHTML = content[contentId];
}