// <reference path="../../../typings/modules/d3/index.d.ts"/>
import { Directive, Input, OnInit, ElementRef, OnChanges, SimpleChange } from '@angular/core';
//import * as d3 from 'd3';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Directive({
  selector: 'donut-chart'
})

export class DonutChartDirective implements OnInit {
  private d3: D3;
    vm = this;
    userCount = 0;
    tau = 2 * Math.PI; // http://tauday.com/tau-manifesto
    background: any;
    background2: any;
    background3: any;
    textEl: any;
    textEl2: any;
    textEl3: any;
    fg: any;
    fg2: any;
    fg3: any;
    g: any;
    g2:any;
    g3:any;
    arc: any;
    @Input() assets: number = 60;
    @Input() locations: number = 34;
    @Input() users: number = 20;
    @Input() total: number = this.assets + this.locations + this.users;
    //total = this.assets + this.locations + this.users;
    constructor(private elementRef: ElementRef,

        private d3Service: D3Service,
        //private d3: any = d3Service.getD3(),


    ) {
        this.d3 = d3Service.getD3();
        let d3 = this.d3;
        let arc = d3.arc()
            .innerRadius(100)
            .outerRadius(130)
            .startAngle(0);
        let el = this.elementRef.nativeElement;

        var svg = d3.select(el).append("svg").attr("width", 1200).attr("height", 400),
            width = 200,
            x1 = 140,
            height = 200,
            y1 = 150,
            x2 = 420,
            x3 = 700,
            viewBox = "0 0 1 1",
            g = svg.append("g").attr("transform", "translate(" + x1 + "," + y1 + ")")
                .attr("viewBox", viewBox),
            g2 = svg.append("g").attr("transform", "translate(" + x2 + "," + y1 + ")")
                .attr("viewBox", viewBox),
            g3 = svg.append("g").attr("transform", "translate(" + x3 + "," + y1 + ")")
                .attr("viewBox", viewBox);

            this.g = g;
            this.arc = arc;
            this.g2 = g2;
            this.g3 = g3;

        this.background = g.append("path")
            .datum({ endAngle: this.tau })
            .style("fill", "rgba(255, 165, 0, 0.3)")
            .attr("d", arc);

        this.background2 = g2.append("path")
            .datum({ endAngle: this.tau })
            .style("fill", "rgba(70, 130, 180, 0.3)")
            .attr("d", arc);

        this.background3 = g3.append("path")
            .datum({ endAngle: this.tau })
            .style("fill", "rgba(120, 200, 180, 0.3)")
            .attr("d", arc);

        // Add the foreground arc in orange, currently showing 12.7%.


        this.fg2 = g2.append("path")
            .datum({ endAngle: 0.72 * this.tau })
            .style("fill", "rgba(70, 130, 180, 1)")
            .attr("d", arc);

        this.fg3 = g3.append("path")
            .datum({ endAngle: 0.25 * this.tau })
            .style("fill", "rgba(120, 200, 180, 1)")
            .attr("d", arc);

        this.textEl = g.append("text")
            .attr("text-anchor", "middle");


        this.textEl2 = g2.append("text")
            .attr("text-anchor", "middle");


        this.textEl3 = g3.append("text")
            .attr("text-anchor", "middle");


    }

    drawAssetDonutChart(assets:number) {
      //delete existing chart
      this.background = this.g.append("path")
          .datum({ endAngle: this.tau })
          .style("fill", "white")
          .attr("d", this.arc);

      //draw a new background
      this.background = this.g.append("path")
          .datum({ endAngle: this.tau })
          .style("fill", "rgba(255, 165, 0, 0.3)")
          .attr("d", this.arc);

        //draw foreground with new value
      this.fg = this.g.append("path")
          .datum({ endAngle: assets/100 * this.tau })
          .style("fill", "rgba(255, 165, 0, 1)")
          .attr("d", this.arc);

      //add text to the middle
      this.textEl = this.textEl
              .text(this.assets + " Assets: " + this.d3.format(".2%")(((this.assets * 100) / this.total) / 100));
    }

    drawLocationDonutChart(locations:number) {
      //delete existing chart
      this.background2 = this.g2.append("path")
          .datum({ endAngle: this.tau })
          .style("fill", "white")
          .attr("d", this.arc);

      //draw a new background
      this.background2 = this.g2.append("path")
          .datum({ endAngle: this.tau })
          .style("fill", "rgba(70, 130, 180, 0.3)")
          .attr("d", this.arc);

        //draw foreground with new value
      this.fg2 = this.g2.append("path")
          .datum({ endAngle: locations/100 * this.tau })
          .style("fill", "rgba(70, 130, 180, 1)")
          .attr("d", this.arc);

      //add text to the middle
      this.textEl2 = this.textEl2
              .text(this.locations + " Locations: " + this.d3.format(".2%")(((this.locations * 100) / this.total) / 100));
    }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        this.assets = changes['assets'].currentValue;
        this.locations = changes['locations'].currentValue;
        this.drawAssetDonutChart(this.assets);
        this.drawLocationDonutChart(this.locations);
    }

    ngOnInit() {
      let t = 40;
      let d3 = this.d3;
      let vm = this;

      this.textEl = this.textEl
          .text(this.assets + " Assets: " + d3.format(".2%")(((this.assets * 100) / this.total) / 100));

      setTimeout(() => {
          vm.fg.transition()
              .attrTween("d", vm.arcTween(((+15 * 100) / t) / 100 * vm.tau));
      }, 3000);


      this.textEl2 = this.textEl2
          .text(this.locations + " Locations: " + d3.format(".2%")(((this.locations * 100) / this.total) / 100));
      setTimeout(() => {
          vm.fg2.transition()
              .attrTween("d", vm.arcTween(((10 * 100) / t) / 100 * vm.tau));
      }, 1000);


      this.textEl3 = this.textEl3
          .text(this.users + " Users: " + d3.format(".2%")(((this.users* 100) / this.total) / 100));
      setTimeout(() => {
          vm.fg3.transition()
              .attrTween("d", vm.arcTween(((+15 * 100) / t) / 100 * vm.tau));
      }, 2000);


    }




    arcTween(newAngle: any) {
      let d3 = this.d3Service.getD3();
      let arc = d3.arc()
          .innerRadius(100)
          .outerRadius(130)
          .startAngle(0);

        return function(d: any) {
          //let interpolate = d3.interpolate(d.endAngle, newAngle);
            return function(t: any) {
                //d.endAngle = interpolate(t);
                return arc(d);
            };
        };
    }
}
