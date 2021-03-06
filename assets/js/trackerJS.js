$(document).ready(function () {
    var url = "https://api.covid19api.com/summary"

    $.getJSON(url, function (data) {
        // console.log(data)

        var total_active, total_recovered, total_deaths, total_confirmed

        total_active = data.Global.NewConfirmed
        // console.log(total_active)
        total_confirmed = data.Global.TotalConfirmed
        total_recovered = data.Global.NewRecovered
        total_deaths = data.Global.TotalDeaths

        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)

        var country = []
        var confirmed = []
        var recovered = []
        var deaths = []

        $.each(data.Countries, function (id, obj) {
            country.push(obj.Country)
            confirmed.push(obj.NewConfirmed)
            recovered.push(obj.NewRecovered)
            deaths.push(obj.NewDeaths)
        })

        country.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()

        // console.log(country)

        var myChart = document.getElementById("myChart").getContext('2d')

        var chart = new Chart(myChart, {
            // line
            // bar
            // radar
            // doughnut and pie
            // polar area
            // bubble
            // scatter
            type: 'bar',
            zoomEnabled: true,
            
            data: {
                labels: country,
                datasets: [
                    {
                        label: "Confirmed Cases",
                        data: confirmed,
                        backgroundColor: '#ff9800',
                        minibarLength: 100
                    },
                    {
                        label: "Recovered Cases",
                        data: recovered,
                        backgroundColor: "#2ecc71",
                        minibarLength: 100
                    },
                    {
                        label: "Death Cases",
                        data: deaths,
                        backgroundColor: "#e74c3c",
                        minibarLength: 100
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            
                        }
                    }],
                    // yAxes: [{
                    //     type: 'logarithmic',
                    //     ticks: {
                    //         min: 10,
                    //         max: 1000000,
                    //         callback: function (value, index, values) {
                    //             return value ;
                    //         }
                    //     },
                    //     scaleLabel: {
                    //         display: true,
                            
                    //     }
                    // }]

                    yAxes: [{
                        type: 'logarithmic',
                        ticks: {
                            autoSkip: false,
                            min: 0,
                            callback: function (value, index, values) {
                                if( value==10 || value==100 || value==1000 || value==10000 || value==100000  || value==1000000 || value == 1000000){
                                    return value ;
                                }
                            }
                        },
                        scaleLabel: {
                            display: true,
                            
                        }
                    }]
                },

                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var label = data.datasets[tooltipItem.datasetIndex].label || '';

                            if (label) {
                                label += ': ';
                            }
                            label += tooltipItem.yLabel.toFixed(2);
                            return label;
                        }
                    }
                },
                legend: {
                    display: false
                }
            },
        });
        chart.render()
    })
})

