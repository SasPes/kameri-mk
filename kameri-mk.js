var vps = 5;
var width = (window.innerWidth - 50) / vps;
var prop = 1.3;
var height = width / 1.3;

function init() {
    var cams = [
        "bogorodica", "tabanovce", "kafasan", "deve_bair", "blace",
        "romanovce_1", "romanovce_2",
        "miladinovci_1", "miladinovci_2",
        "petrovec_1", "petrovec_2",
        "gradsko_1", "gradsko_2",
        "otovica", "sopot",
        "glumovo_1", "glumovo_2",
        "zelino_1", "zelino_2",
        "tetovo_1", "tetovo_2",
        "gostivar_1", "gostivar_2"
    ];

    var html = "";

    for (var i = 0; i < cams.length; i++) {
        var template = "<object data='JarisFLVPlayer.swf' id='JarisFLVPlayer' type='application/x-shockwave-flash' height='" + height + "px' width='" + width + "px'>" +
                "<param value='false' name='menu'>" +
                "<param value='noScale' name='scale'>" +
                "<param value='true' name='allowFullscreen'>" +
                "<param value='always' name='allowScriptAccess'>" +
                "<param value='#000000' name='bgcolor'>" +
                "<param value='high' name='quality'>" +
                "<param value='opaque' name='wmode'>" +
                "<param value='source=" + cams[i] + ".stream&amp;type=video&amp;streamtype=rtmp&amp;server=rtmp://streamer1.interspace.mk:1935/jpdp&amp;autostart=true&amp;logo=&amp;logoposition=top right&amp;logoalpha=&amp;logowidth=&amp;logolink=&amp;hardwarescaling=false&amp;darkcolor=000000&amp;brightcolor=4c4c4c&amp;controlcolor=FFFFFF&amp;hovercolor=67A8C1&amp;controls=false&amp;controltype=1' name='flashvars'>" +
                "</object>";

        html += template;
    }

    document.getElementById("demo").innerHTML = html;
}