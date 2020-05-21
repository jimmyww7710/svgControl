
function getSvgId() {
    var $elements = $('[*|href]:not([href])');
    var path;
    var allsvgId = [];
    $elements.each(function(index, element) {
    path = $(this).attr("xlink:href");
    allsvgId.push($(this).attr("xlink:href").substr(path.indexOf('#') + 1,path.length - 1))
    });

    console.log(allsvgId); // output: [..., ...]
}

window.addEventListener("load", getSvgId);