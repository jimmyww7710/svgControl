
function getSvgId() {
    var $elements = $('.detect').find('[*|href]:not([href])');
    var allsvgId = [];
    $elements.each(function (index, element) {
        var pathArr = ($(this).attr("xlink:href")).split(/[#]/);
        allsvgId.push(pathArr[1]);
    });

    console.log(allsvgId); // output: [..., ...]
}

window.addEventListener("load", getSvgId);