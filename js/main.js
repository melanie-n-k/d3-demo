/* javascript sheet mkohls */
//D3 lab

//execute script when window is loaded
window.onload = function(){
    ///svg dimension variables
    var width = 900, height = 500;

    var container = d3.select("body") //get the <body> element from the DOM
        .append("svg") //puts a new svg into the body of the html doc
        .attr("width", width) //assign width
        .attr("height", height) //assign height
        .attr("class", "container") //to use for future styling and selection
        .style("background-color","#FAAEF4"); //semicolon at end of code block

    //new block to add another element
    var insideRect = container.append("rect") //put rectangle inside main container (svg)
        .datum(400)
        .attr("width", function(d){
          return d*2;
        }) //width of rectangle is now based on datum (d) (doesn't have to be called d)
        .attr("height", function(d){
          return d;
        }) //height of rectangle is also a function of datum
        .attr("class", "insideRect") //class name same as variable name
        .attr("x", 50) //horizontal offset
        .attr("y", 50) //vertical offset
        .style("fill","#FCEE94"); //fill in color of rectangle

    var arrayData = [10, 20, 30, 40, 50]; //random array of data

    var cityPop = [  //example population array from module 2
    {
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];

    var bubbles = container.selectAll(".bubbles") //empty selection of circles that don't yet exist
        .data(cityPop) //feed in data from array
        .enter() //?
        .append("circle")
        .attr("class", "bubbles")
        .attr("id", function(d){
          return d.city;
        })
        .attr("r", function(d){
          var area = d.population * 0.01;
          return Math.sqrt(area/Math.PI); //circle radius
        })
        .attr("cx", function(d, i){
          return 90 + (i*180); //circle x position
        })
        .attr("cy", function(d){
          return 450 - (d.population * 0.0005); // circle y position
        })
        .style("fill","#A1FBFA");
};
