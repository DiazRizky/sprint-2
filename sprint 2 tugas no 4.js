for (y = 1; y < 10; y++) {
    for (x = 1; x < 10; x++) {
      if ((y <= x || y + x <= 10) && (x <= y || x + y >= 10)) 
      document.write("*");
      else document.write("_");
    }
    document.write("<br>");
  }