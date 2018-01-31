var Graph = function Graph(game)
{
    this.game = game;
    
    this.canvas;
    this.context;
    
    this.sections = 8;
    
    this.Val_max = 90;
    this.Val_min = -90;
    
    this.y;
    
    // Values for the Data Plot, they can also be obtained from a external file
    // this.worldview =  [0, 1, 3, 4, 5, 10, 15, 20, 25];
}

Graph.prototype = 
{
    drawLineGraph: function drawLineGraph(data)
    {
        // Create Canvas
        this.canvas = document.createElement("canvas");
        this.canvas.height = 250;
        this.canvas.width = 500;
        this.context = this.canvas.getContext("2d");
        this.context.fillStyle = "#0099ff";
        
        this.sections = data.length;
        
        var max = Math.max.apply(Math, data);
        var min = Math.max.apply(Math, data);
        var absMax = Math.max(max, Math.abs(min));
        this.Val_max = absMax;
        this.Val_min = -absMax;
        
        // Set Axis
        var stepSize = 10;
        var columnSize = 50;
        var rowSize = 50;
        var margin = 10;
        var xAxis = [" ", "Tag 0", "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7"];

        // Set scale
        this.yScale = (this.canvas.height - columnSize - margin) / (this.Val_max - this.Val_min);
        this.xScale = (this.canvas.width - rowSize) / this.sections;

        // Draw Grid
        this.context.strokeStyle="#009933"; // color of grid lines
        this.context.beginPath();
        // print Parameters on X axis, and grid lines on the graph
        for (i=1;i<=this.sections;i++) {
            var x = i * this.xScale;
            this.context.fillText(xAxis[i], x,columnSize - margin);
            this.context.moveTo(x, columnSize);
            this.context.lineTo(x, this.canvas.height - margin);
        }
        // print row header and draw horizontal grid lines
        var count =  0;
        for (scale=this.Val_max;scale>=this.Val_min;scale = scale - stepSize) {
            var y = columnSize + (this.yScale * count * stepSize); 
            this.context.fillText(scale, margin,y + margin);
            this.context.moveTo(rowSize,y)
            this.context.lineTo(this.canvas.width,y)
            count++;
        }
        this.context.stroke();

        this.context.translate(rowSize,this.canvas.height + this.Val_min * this.yScale);
        this.context.scale(1,-1 * this.yScale);

        // Plot Data
        this.context.strokeStyle="#FF0066";
        this.plotDataLine(data);
        
        return this.canvas;
    },

    plotDataLine: function plotDataLine(dataSet)
    {
        this.context.beginPath();
        this.context.moveTo(0, dataSet[0]);
        for (i=1;i<this.sections;i++) {
            this.context.lineTo(i * this.xScale, dataSet[i]);
        }
        this.context.stroke();
    },
    
    drawBarGraph: function drawBarGraph(data)
    {
        // Create Canvas
        this.canvas = document.createElement("canvas");
        this.canvas.height = 250;
        this.canvas.width = 500;
        this.context = this.canvas.getContext("2d");
        this.context.fillStyle = "#000";
        
        // Get interests
        var interests = [];
        for(var i in data)
            interests.push([i, data[i]]);
        
        interests.sort(function(a, b){ return b[1] - a[1]; });
        
        // Get # and size of bars
        this.sections = interests.length;
        this.Val_max = interests[0][1];

        var stepSize = 1;
        var columns = interests.length;
        var columnSize = 50;
        var rowSize = 60;
        var margin = 10;

        this.yScale = (this.canvas.height - columnSize - margin) / (this.Val_max);
        this.xScale = (this.canvas.width - rowSize) / (this.sections + 1);

        this.context.strokeStyle="#cea"; // background black lines
        this.context.beginPath();
        
            // draw lines in the background
        this.context.font = "16 pt Helvetica"
        var count =  0;
        for (scale=this.Val_max;scale>=0;scale = scale - stepSize) {
            this.y = columnSize + (this.yScale * count * stepSize); 
            this.context.fillText(scale, margin,this.y + margin);
            this.context.moveTo(rowSize,this.y)
            this.context.lineTo(this.canvas.width,this.y)
            count++;
        }
        this.context.stroke();

            // print names of each data entry
        this.context.font = "20 pt Verdana";
        this.context.textBaseline="bottom";
        for (i=0;i<columns;i++) {
            this.computeHeight(interests[i][1]);
            this.context.fillText(interests[i][0], this.xScale * (i+1),this.y - margin);
        }

            // shadow for graph's bar lines with color and offset

        this.context.fillStyle="#9933FF;";
      this.context.shadowColor = 'rgba(128,128,128, 0.5)';

      //shadow offset along X and Y direction 
        this.context.shadowOffsetX = 9;
        this.context.shadowOffsetY = 3;

            // translate to bottom of graph  inorder to match the data 
      this.context.translate(0,this.canvas.height - margin);
        this.context.scale(this.xScale,-1 * this.yScale);

            // draw each graph bars	
        for (i=0;i<columns;i++) {
            this.context.fillRect(i+1, 0, 0.3, interests[i][1]);
        }
        
        return this.canvas;
    },
    

    computeHeight: function computeHeight(value)
    {
        this.y = this.canvas.height - value * this.yScale ;	
    }
}
