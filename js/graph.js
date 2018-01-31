var Graph = function Graph(game)
{
    this.game = game;
    
    this.canvas;
    this.context;
    
    this.sections = 8;
    
    this.Val_max = 100;
    this.Val_min = -100;
    
    // Values for the Data Plot, they can also be obtained from a external file
    // this.worldview =  [0, 1, 3, 4, 5, 10, 15, 20, 25];
}

Graph.prototype = 
{
    drawGraph: function drawGraph(data)
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
        var margin = 3;
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
            this.context.fillText(xAxis[i], x,columnSize - margin*3);
            this.context.moveTo(x, columnSize);
            this.context.lineTo(x, this.canvas.height - margin);
        }
        // print row header and draw horizontal grid lines
        var count =  0;
        for (scale=this.Val_max;scale>=this.Val_min;scale = scale - stepSize) {
            var y = columnSize + (this.yScale * count * stepSize);
            
            this.context.fillText(scale == this.Val_max ? "Konservativ" : (scale <= this.Val_min ? "Progressiv" : scale), margin,y + margin);
            this.context.moveTo(rowSize,y)
            this.context.lineTo(this.canvas.width,y)
            count++;
        }
        this.context.stroke();

        this.context.translate(rowSize,this.canvas.height + this.Val_min * this.yScale);
        this.context.scale(1,-1 * this.yScale);

        // Plot Data
        this.context.strokeStyle="#FF0066";
        this.plotData(data);
        
        return this.canvas;
    },

    plotData: function plotData(dataSet)
    {
        this.context.beginPath();
        this.context.moveTo(0, dataSet[0]);
        for (i=1;i<this.sections;i++) {
            this.context.lineTo(i * this.xScale, dataSet[i]);
        }
        this.context.stroke();
    }
}
