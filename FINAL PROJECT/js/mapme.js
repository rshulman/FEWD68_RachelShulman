  jQuery(document).ready(function() {
      jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#00001a',
        color: '#ffffff',
        hoverOpacity: .9,
        selectedColor: '#00BFFF',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#C8EEFF', '#006491'],
        normalizeFunction: 'polynomial',
        selectedRegions: ['BB', 'BS', 'CA', 'CH', 'CR', 'CZ', 'DE', 'DK', 'DO', 'ES', 'FR', 'GD', 'GR', 'HU', 'IE', 'IL', 'IT', 'JM', 'JO', 'MX', 'NL','PL', 'SE', 'US', 'ZA'],
        onRegionClick: function(event, code, region) {
            switch (code) {
                case "bb":
                    window.location = ("barbados.html");
                    break;
                case "bs":
                    window.location = ("bahamas.html");
                    break;
                case "ca":
                    window.location = ("canada.html");
                    break;   
                case "ch":
                    window.location = ("switz.html");
                    break;
                case "cr":
                    window.location = ("costarica.html");
                    break;
                case "cz":
                    window.location = ("czech.html");
                    break;
                case "de":
                    window.location = ("germany.html");
                    break;
                case "dk":
                    window.location = ("denmark.html");
                    break;
                case "do":
                    window.location = ("dominican.html");
                    break;
                case "es":
                    window.location = ("spain.html");
                    break;
                case "fr":
                    window.location = ("france.html");
                    break;
                case "gd":
                    window.location = ("grenada.html");
                    break;
                case "gr":
                    window.location = ("greece.html");
                    break;
                case "hu":
                    window.location = ("hungary.html");
                    break;
                case "ie":
                    window.location = ("ireland.html");
                    break;
                case "il":
                    window.location = ("israel.html");
                    break;
                case "it":
                    window.location = ("italy.html");
                    break;
                case "jm":
                    window.location = ("jamaica.html");
                    break;
                case "jo":
                    window.location = ("jordan.html");
                    break;
                case "mx":
                    window.location = ("mexico.html");
                    break;
                case "nl":
                    window.location = ("netherlands.html");
                    break;
                case "pl":
                    window.location = ("poland.html");
                    break;
                case "se":
                    window.location = ("sweden.html");
                    break;
                case "us":
                    window.location = ("usa.html");
                    break;
                case "za":
                    window.location = ("africa.html");
                    break;
            }
        }
    });
});

