import{r as t,d as s,h as i}from"./p-f87cf4ae.js";const e=class{constructor(s){t(this,s),this.size=12,this.color="",this.svgHTML=""}async getSVGHTML(t){const i=await fetch(s(`assets/icons/${t}.svg`));return await i.text()}setSVGState(t){this.getSVGHTML(t).then(t=>{this.svgHTML=t}).catch()}componentWillLoad(){this.setSVGState(this.name)}render(){return i("div",{class:"icon",style:{"--icon-color":`${this.color}`,height:`${this.size}px`,width:`${this.size}px`},innerHTML:this.svgHTML})}static get assetsDirs(){return["assets"]}static get watchers(){return{name:["setSVGState"]}}static get style(){return".icon{display:inline-block;color:var(--icon-color,var(--color-elephant-900))}.icon svg{width:100%;height:100%}"}};export{e as fw_icon};