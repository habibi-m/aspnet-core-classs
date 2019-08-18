let fname = "Mohammad";

document.write("Hello ".repeat(3) + "<br />");

document.writeln(fname.startsWith("Mo") + "<br />");

document.writeln(fname.endsWith("ad") + "<br />");

document.writeln(fname.includes("ham") + "<br />");

let multilinestring = "this is \
a multiline \
string."

document.writeln(multilinestring + "<br />");

let amothermultilinestring = `another
multiline
string.`

document.writeln(`${amothermultilinestring}<br />`);