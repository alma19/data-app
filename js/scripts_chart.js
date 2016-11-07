var data1=[701, 1955, 142, 168, 4, 111];  //race
var data2=[635, 67, 28, 178, 120, 51, 13];  //religion
var data3=[683, 168, 278, 18, 31];  //sexual orientation
var data4=[376, 414]; //ethnicity
var data5=[26, 69]; //disability
var data6=[12, 28]; //gender
var data7=[69, 40]; //gender-identity
var data8=[9035, 8380, 9080, 9006, 9168, 7789, 7699, 7254, 6718, 6933, 6418]; 





$( document ).ready(function() {
  loadData("data.json");
   $('#example').DataTable( {
        "ajax": 'data-table.json'
    } );
  //buildChart();
});


function loadData(dataURL){

  $.ajax({
  method: "GET",
  url: dataURL,
  dataType: "json",
  success: parseData
});

}


function parseData(data){
    console.log(data);
    console.log(parseFloat(data.Race[0].Offenses));

    
    data1=["Offenses"];
    data2=["Offenses"];
    data3=["Offenses"];
    data4=["Offenses"];
    data5=["Offenses"];
    data6=["Offenses"];
    data7=["Offenses"];
    data8=["Offenses"];
    
    $.each(data.Race, function(i, item){
        console.log(i);
        console.log(item);
        data1.push(parseFloat(item.Offenses));         
        });
       
        
    $.each(data.Religion, function(i, item){
       data2.push(parseFloat(item.Offenses));  
    });
    
     $.each(data.Sexual, function(i, item){
        
       data3.push(parseFloat(item.Offenses));  
    });
     
      $.each(data.Ethnicity, function(i, item){
       data4.push(parseFloat(item.Offenses));  
    });
      
       $.each(data.Disability, function(i, item){
       data5.push(parseFloat(item.Offenses));  
    });
       
        $.each(data.Gender, function(i, item){
       data6.push(parseFloat(item.Offenses));  
    });
        
         $.each(data.GenderI, function(i, item){
       data7.push(parseFloat(item.Offenses));  
    });
         
          $.each(data.Years, function(i, item){
       data8.push(parseFloat(item.Number));  
    });
       
       
         
    
    console.log(data1);
    console.log(data7);
    buildChart();
    buildReligionChart();
    buildSOChart();
    buildEthnicityChart();
    buildDisabilityChart(); 
    buildGenderChart();
    buildGenderIdentityChart();
    buildYearsChart();
    
}


function buildChart(){
    var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [data1],
          axes: {
            Bias: 'y'
          },
          types: {
            Offenses:'bar'
          }
        },
        color: {
          pattern: ['#004195']   
        },
        axis: {
          x: {
            type:'category',
            categories: ['Anti-White', 'Anti-Black or African American', 'Anti-American Indian or Alaska Native', 'Anti-Asian', 'Anti-Native Hawaiian or Other Pacific Islander', 'Anti-Multiple Races, Group' ]
          },
          y: {
            label: {
              text: 'Number of Offenses',
              position: 'outer-middle'
            },
            
          }
        }
        
        
    });
}; //buildChart()

function buildReligionChart(){
    var religion = c3.generate({
        bindto: '#religion-chart',
        data: {
          columns: [data2],
          axes: {
            Bias: 'y'
          },
          types: {
            Offenses:'bar'
          }
        },
        color: {
          pattern: ['#004195']   
        },
        axis: {
          x: {
            type:'category',
            categories: ['Anti-Jewish', 'Anti-Catholic', 'Anti-Protestant', 'Anti-Islamic (Muslim)', 'Anti-Other Religion', 'Anti-Multiple Religions, Group', 'Anti-Atheism/Agnosticism/etc.']
          },
          y: {
            label: {
              text: 'Number of Offenses',
              position: 'outer-middle'
            },
            
          }
        }
    });
}; //buildReligionChart()

function buildSOChart(){
    var so = c3.generate({
        bindto: '#so-chart',
        data: {
          columns: [data3],
          axes: {
            Bias: 'y'
          },
          types: {
            Offenses:'bar'
          }
        },
        color: {
          pattern: ['#004195']   
        },
        axis: {
          x: {
            type:'category',
            categories: ['Anti-Gay (Male)', 'Anti-Lesbian', 'Anti-Lesbian, Gay, Bisexual, or Transgender (Mixed Group)', 'Anti-Heterosexual', 'Anti-Bisexual']
          },
          y: {
            label: {
              text: 'Number of Offenses',
              position: 'outer-middle'
            },
            
          }
        }
    });
}  //sexual orientation chart

function buildEthnicityChart(){
    var ethnicity = c3.generate({
        bindto: '#ethnicity-chart',
        data: {
          columns: [data4],
          axes: {
            Bias: 'y'
          },
          types: {
            Offenses:'bar'
          }
        },
        color: {
          pattern: ['#004195']   
        },
        axis: {
          x: {
            type:'category',
            categories: ['Anti-Hispanic or Latino', 'Anti-Not Hispanic or Latino']
          },
          y: {
            label: {
              text: 'Number of Offenses',
              position: 'outer-middle'
            },
            
          }
        }
    });
}  //ethnicity chart

function buildDisabilityChart(){
    var disability = c3.generate({
        bindto: '#disability-chart',
        data: {
          columns: [data5],
          axes: {
            Bias: 'y'
          },
          types: {
            Offenses:'bar'
          }
        },
        color: {
          pattern: ['#004195']   
        },
        axis: {
          x: {
            type:'category',
            categories: ['Anti-Physical', 'Anti-Mental']
          },
          y: {
            label: {
              text: 'Number of Offenses',
              position: 'outer-middle'
            },
            
          }
        }
    });
}  //disability chart

function buildGenderChart(){
    var gender = c3.generate({
        bindto: '#gender-chart',
        data: {
          columns: [data6],
          axes: {
            Bias: 'y'
          },
          types: {
            Offenses:'bar'
          }
        },
        color: {
          pattern: ['#004195']   
        },
        axis: {
          x: {
            type:'category',
            categories: ['Anti-Male', 'Anti-Female']
          },
          y: {
            label: {
              text: 'Number of Offenses',
              position: 'outer-middle'
            },
            
          }
        }
    });
}  //gender chart


function buildGenderIdentityChart(){
    var genderIdentity = c3.generate({
        bindto: '#genderi-chart',
        data: {
          columns: [data7],
          axes: {
            Bias: 'y'
          },
          types: {
            Offenses:'bar'
          }
        },
        color: {
          pattern: ['#004195']   
        },
        axis: {
          x: {
            type:'category',
            categories: ['Anti-Transgender', 'Anti-Gender Non-Conforming']
          },
          y: {
            label: {
              text: 'Number of Offenses',
              position: 'outer-middle'
            },
            
          }
        }
    });
}  //gender-identity chart

function buildYearsChart(){
    var years = c3.generate({
        bindto: '#years-chart',
        data: {
          columns: [data8],
          axes: {
            Bias: 'y'
          }
        },
        color: {
          pattern: ['#004195']   
        },
        axis: {
          x: {
            type:'category',
            categories: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
          },
          y: {
            label: {
              text: 'Number of Offenses',
              position: 'outer-middle'
            },
            
          }
        }
    });
}  //years chart



//MAP
$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "us-ma",
            "value": 418
        },
        {
            "hc-key": "us-wa",
            "value": 367
        },
        {
            "hc-key": "us-ca",
            "value": 943
        },
        {
            "hc-key": "us-or",
            "value": 38
        },
        {
            "hc-key": "us-wi",
            "value": 62
        },
        {
            "hc-key": "us-me",
            "value": 34
        },
        {
            "hc-key": "us-mi",
            "value": 354
        },
        {
            "hc-key": "us-nv",
            "value": 29
        },
        {
            "hc-key": "us-nm",
            "value": 13
        },
        {
            "hc-key": "us-co",
            "value": 129
        },
        {
            "hc-key": "us-wy",
            "value": 0
        },
        {
            "hc-key": "us-ks",
            "value": 86
        },
        {
            "hc-key": "us-ne",
            "value": 61
        },
        {
            "hc-key": "us-ok",
            "value": 37
        },
        {
            "hc-key": "us-mo",
            "value": 106
        },
        {
            "hc-key": "us-il",
            "value": 136
        },
        {
            "hc-key": "us-in",
            "value": 60
        },
        {
            "hc-key": "us-vt",
            "value": 15
        },
        {
            "hc-key": "us-ar",
            "value": 16
        },
        {
            "hc-key": "us-tx",
            "value": 165
        },
        {
            "hc-key": "us-ri",
            "value": 5
        },
        {
            "hc-key": "us-al",
            "value": 10
        },
        {
            "hc-key": "us-ms",
            "value": 1
        },
        {
            "hc-key": "us-nc",
            "value": 186
        },
        {
            "hc-key": "us-va",
            "value": 131
        },
        {
            "hc-key": "us-ia",
            "value": 12
        },
        {
            "hc-key": "us-md",
            "value": 18
        },
        {
            "hc-key": "us-de",
            "value": 18
        },
        {
            "hc-key": "us-pa",
            "value": 58
        },
        {
            "hc-key": "us-nj",
            "value": 347
        },
        {
            "hc-key": "us-ny",
            "value": 558
        },
        {
            "hc-key": "us-id",
            "value": 40
        },
        {
            "hc-key": "us-sd",
            "value": 18
        },
        {
            "hc-key": "us-ct",
            "value": 144
        },
        {
            "hc-key": "us-nh",
            "value": 22
        },
        {
            "hc-key": "us-ky",
            "value": 199
        },
        {
            "hc-key": "us-oh",
            "value": 474
        },
        {
            "hc-key": "us-tn",
            "value": 220
        },
        {
            "hc-key": "us-wv",
            "value": 28
        },
        {
            "hc-key": "us-dc",
            "value": 39
        },
        {
            "hc-key": "us-la",
            "value": 11
        },
        {
            "hc-key": "us-fl",
            "value": 72
        },
        {
            "hc-key": "us-ga",
            "value": 50
        },
        {
            "hc-key": "us-sc",
            "value": 60
        },
        {
            "hc-key": "us-mn",
            "value": 117
        },
        {
            "hc-key": "us-mt",
            "value": 43
        },
        {
            "hc-key": "us-nd",
            "value": 51
        },
        {
            "hc-key": "us-az",
            "value": 307
        },
        {
            "hc-key": "us-ut",
            "value": 58
        },
        {
            "hc-key": "us-ak",
            "value": 7
        },
        {
            "value": 51
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : ''
        },

        subtitle : {
            text : ''
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            max: 1000
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Number of Offenses',
            states: {
                hover: {
                    color: '#ffffff'
                }
            },
            dataLabels: {
                
                format: '{point.name}'
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
});

