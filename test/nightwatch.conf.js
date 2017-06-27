var host = process.env.SELENIUM_HOST || 'localhost';
var port = process.env.SELENIUM_PORT || 4444;
var endpoint = process.env.ENDPOINT || 'http://localhost:5000';

module.exports = {
  "src_folders": [
    "specs"
  ],
  "output_folder": "reports",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "globals_path": "",
  "test_settings": {
    "default": {
      "selenium_host": host,
      "selenium_port": port,
      "launch_url": endpoint,
      "silent": true,
      "end_session_on_fail": false,
      "skip_testcases_on_fail": false,
      "screenshots": {
        "enabled": true,
        "path": "reports",
        "on_failure": true,
        "on_error": true
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
