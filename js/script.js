

// TEXT OVERFLOW

$('[id=desc]').each(function() {
        var desc = $(this).text();
        if (desc.length > 113) {
        desc = desc.substr(0, 113) + '...';    
        }
        $(this).text(desc);
     });

  

  		$('[id=heading]').each(function() {
        var heading = $(this).text();
        if (heading.length > 120) {
        heading = heading.substr(0, 120) + '...';    
        }
        $(this).text(heading);
     });

 // SLIDEUP 1

  $('#slide').click(function(){
    $('#border1').slideToggle(500);
  });

    $("#slide").click(function(){
      if($('.slide1').hasClass('showtable')) {
        $('.slide1.showtable').animate({height:300},500).removeClass('showtable');
      } else { 
        $('.slide1').animate({height:0},500)
        $('.slide1').addClass('showtable');
      }
    });

  // SLIDEUP 2

  $('#slide2').click(function(){
    $('#border2').slideToggle(500);
  });

    $("#slide2").click(function(){
      if($('.slide2').hasClass('showtable')) {
        $('.slide2.showtable').animate({height:300},500).removeClass('showtable');
      } else { 
        $('.slide2').animate({height:0},500)
        $('.slide2').addClass('showtable');
      }
    });

    // SLIDEUP 3
    $('#slide3').click(function(){
    $('#border3').slideToggle(500);
  });

    $("#slide3").click(function(){
      if($('.slide3').hasClass('showtable')) {
        $('.slide3.showtable').animate({height:300},500).removeClass('showtable');
      } else { 
        $('.slide3').animate({height:0},500)
        $('.slide3').addClass('showtable');
      }
    });


    $(function(){
        $('#dr-btn').click(function(){
          $('.cardoff').slideToggle();
        });
        $('#dr-btn2').click(function(){
          $('.cardoff2').slideToggle();
        });
        $('#dr-btn3').click(function(){
          $('.cardoff3').slideToggle();
        });
      });

  



    // CHART 2



var histcatexplong = [
        { 
      "key" : "Facebook" , 
      "values" : []
    }
    ];
    
  var colors = ["rgba(41, 128, 185,.8)"];
  d3.scale.colors = function() {
        return d3.scale.ordinal().range(colors);
    };
  
  var colors = d3.scale.colors();
    /*var colors = d3.scale.category20();*/ 
    var keyColor = function(d, i) {return colors(d.key)};  
  
    var chart;
    nv.addGraph(function() {
        chart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .showControls(false)
            .showYAxis(true)
            .showLegend(false)
            .rightAlignYAxis(true)
            .controlLabels({stacked: "Stacked"})
            .color(keyColor)
            .duration(500)

            chart.interactiveLayer.tooltip.contentGenerator(function (d) {
          var html = "<h6>"+d.value+"</h6> <ul>";

          d.series.forEach(function(elem){
            html +="<h5 style='color:"+elem.color+"'>"
                    +elem.key+"</h5><p>"+elem.value+"</p>";
          })
          html += "</ul>"
          return html;
        });
            

        chart.xAxis.tickFormat(function(d) { return d3.time.format('%a')(new Date(d)) });
        chart.yAxis.tickFormat( d3.format('f'));

        chart.legend.margin({
                        top: 30
                    });

        d3.select('#chart2')
            .datum(histcatexplong)
            .transition().duration(1000)
            .call(chart)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#chart2').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });

        nv.utils.windowResize(chart.update);
        return chart;
    });




    // CHART 1



    var histcatexplong = [
        { 
      "key" : "Facebook" , 
      "values" : []
         }
    ];
    
  var colors = ["rgba(41, 128, 185,.8)"];
  d3.scale.colors = function() {
        return d3.scale.ordinal().range(colors);
    };
  
  var colors = d3.scale.colors();
    /*var colors = d3.scale.category20();*/ 
    var keyColor = function(d, i) {return colors(d.key)};  
  
    var chart;
    nv.addGraph(function() {
        chart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .showControls(false)
            .showYAxis(true)
            .showLegend(false)
            .rightAlignYAxis(true)
            .controlLabels({stacked: "Stacked"})
            .color(keyColor)
            .duration(500)

            chart.interactiveLayer.tooltip.contentGenerator(function (d) {
          var html = "<h6>"+d.value+"</h6> <ul>";

          d.series.forEach(function(elem){
            html +="<h5 style='color:"+elem.color+"'>"
                    +elem.key+"</h5><p>"+elem.value+"</p>";
          })
          html += "</ul>"
          return html;
        });
            

        chart.xAxis.tickFormat(function(d) { return d3.time.format('%a')(new Date(d)) });
        chart.yAxis.tickFormat( d3.format('f'));

        chart.legend.margin({
                        top: 30
                    });

        d3.select('#chart1')
            .datum(histcatexplong)
            .transition().duration(1000)
            .call(chart)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#chart1').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });

        nv.utils.windowResize(chart.update);
        return chart;
    });


// CHART 3



    var histcatexplong = [
        { 
      "key" : "Facebook" , 
      "values" : []
         }
    ];
    
  var colors = ["rgba(41, 128, 185,.8)"];
  d3.scale.colors = function() {
        return d3.scale.ordinal().range(colors);
    };
  
  var colors = d3.scale.colors();
    /*var colors = d3.scale.category20();*/ 
    var keyColor = function(d, i) {return colors(d.key)};  
  
    var chart;
    nv.addGraph(function() {
        chart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .showControls(false)
            .showYAxis(true)
            .showLegend(false)
            .rightAlignYAxis(true)
            .controlLabels({stacked: "Stacked"})
            .color(keyColor)
            .duration(500)

            chart.interactiveLayer.tooltip.contentGenerator(function (d) {
          var html = "<h6>"+d.value+"</h6> <ul>";

          d.series.forEach(function(elem){
            html +="<h5 style='color:"+elem.color+"'>"
                    +elem.key+"</h5><p>"+elem.value+"</p>";
          })
          html += "</ul>"
          return html;
        });
            

        chart.xAxis.tickFormat(function(d) { return d3.time.format('%a')(new Date(d)) });
        chart.yAxis.tickFormat( d3.format('f'));

        chart.legend.margin({
                        top: 30
                    });

        d3.select('#chart3')
            .datum(histcatexplong)
            .transition().duration(1000)
            .call(chart)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#chart3').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });

        nv.utils.windowResize(chart.update);
        return chart;
    });