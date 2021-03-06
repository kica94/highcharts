$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "bo-lp",
            "value": 0
        },
        {
            "hc-key": "bo-cb",
            "value": 1
        },
        {
            "hc-key": "bo-cq",
            "value": 2
        },
        {
            "hc-key": "bo-eb",
            "value": 3
        },
        {
            "hc-key": "bo-or",
            "value": 4
        },
        {
            "hc-key": "bo-po",
            "value": 5
        },
        {
            "hc-key": "bo-sc",
            "value": 6
        },
        {
            "hc-key": "bo-tr",
            "value": 7
        },
        {
            "hc-key": "bo-pa",
            "value": 8
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/bo/bo-all.js">Bolivia</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/bo/bo-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
