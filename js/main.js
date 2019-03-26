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
    var insideRect = container.append("rectangle") //put rectangle inside main container (svg)
        .attr("width", 800) //width of rectangle
        .attr("height", 400) //height of rectangle
};
