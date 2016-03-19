export class Browser {
  constructor() {}

  name() {
    var userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.indexOf("msie") != -1 && userAgent.indexOf("opera") == -1 && userAgent.indexOf("webtv") == -1)
        return "msie";

    // Opera
    if (userAgent.indexOf("opera") != -1)
        return "opera";

    // Gecko = Mozilla + Firefox + Netscape
    if (userAgent.indexOf("gecko") != -1)
        return "gecko";

    // Safari
    if (userAgent.indexOf("safari") != -1)
      return "safari";

    // Konqueror
    if (userAgent.indexOf("konqueror") != -1)
      return "konqueror";

    return "unknown";
  };
}