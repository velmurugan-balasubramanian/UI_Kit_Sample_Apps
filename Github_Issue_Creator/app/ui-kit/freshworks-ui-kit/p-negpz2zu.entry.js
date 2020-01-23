import{r as t,c as s,h as i,H as h,g as e}from"./p-f87cf4ae.js";const n=class{constructor(i){t(this,i),this.isExpanded=!1,this.options=[],this.filteredOptions=[],this.hasFocus=!1,this.label="",this.name="",this.type="text",this.state="normal",this.stateText="",this.readonly=!1,this.required=!1,this.forceSelect=!0,this.disabled=!1,this.multiple=!1,this.innerOnFocus=t=>{this.hasFocus=!0,this.fwFocus.emit(t)},this.innerOnClick=()=>{this.filteredOptions=this.options,this.selectList.style.display="block",this.selectList.style.width=String(this.select.clientWidth)+"px",this.isExpanded=!0},this.innerOnBlur=t=>{this.selectList.style.display="none",this.isExpanded=!1,this.fwBlur.emit(t)},this.fwChange=s(this,"fwChange",7),this.fwFocus=s(this,"fwFocus",7),this.fwBlur=s(this,"fwBlur",7)}keyChanged(t,s){JSON.stringify(t)!==JSON.stringify(s)&&(this.options=this.options.map(t=>(t.selected=Array.isArray(this.value)?this.value.includes(t.value):this.value===t.value,t)),this.fwChange.emit({value:this.value}))}fwSelectedHandler(t){this.options=this.options.map(s=>(t.detail.value===s.value?s.selected=t.detail.selected:this.multiple||(s.selected=!1),s)),this.selectList.style.display="none",t.stopPropagation()}optionsChangedHandler(){const t=this.options.filter(t=>t.selected);t.length>0&&(this.value=this.multiple?t.map(t=>t.value):t[0].value||"",this.selectInput.value=this.multiple?"":t[0].text||"")}fwCloseHandler(t){this.options=this.options.map(s=>(s.value===t.detail.value&&(s.selected=!1),s))}onKeyDonw(t){switch(t.key){case"ArrowDown":this.innerOnClick();break;case"Escape":this.innerOnBlur(t)}}onInput(){const t=this.selectInput.value.toLowerCase();this.filteredOptions=""!==t?this.options.filter(s=>s.text.toLowerCase().startsWith(t)):this.options}renderTags(){if(this.multiple)return this.options.filter(t=>t.selected).map(t=>i("fw-tag",{text:t.text,value:t.value}))}renderDropdown(){return this.filteredOptions.map(t=>i("fw-select-option",{value:t.value,selected:t.selected},t.text))}componentWillLoad(){const t=Array.from(this.host.querySelectorAll("fw-select-option")).map(t=>({text:t.textContent,value:t.value,selected:t.selected}));this.options=t,this.filteredOptions=this.options,this.host.innerHTML=""}async getSelectedItem(){return this.options.filter(t=>t.selected)}render(){return i(h,{"aria-disabled":this.disabled,class:{"has-focus":this.hasFocus}},""!==this.label?i("label",{class:{required:this.required}}," ",this.label," "):"",i("div",{class:"select-container"},i("div",{class:"input-container",ref:t=>this.select=t,onClick:()=>this.innerOnClick()},i("div",{class:{"input-container-inner":!0,[this.state]:!0}},this.renderTags(),i("input",{ref:t=>this.selectInput=t,class:{"multiple-select":this.multiple},autoComplete:"off",disabled:this.disabled,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,type:this.type,value:"",onInput:()=>this.onInput(),onFocus:t=>this.innerOnFocus(t),onBlur:t=>this.innerOnBlur(t)}),i("span",{class:{"dropdown-status-icon":!0,expanded:this.isExpanded}}))),i("ul",{tabindex:"0",ref:t=>this.selectList=t},this.renderDropdown()),""!==this.stateText?i("span",{class:"help-block"},this.stateText):""))}get host(){return e(this)}static get watchers(){return{value:["keyChanged"],options:["optionsChangedHandler"]}}static get style(){return":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box;--label-font:var(--font-stack);--input-bg:var(--color-milk);--help-color:var(--color-smoke-300);--error-color:var(--color-persimmon-800);--input-color:var(--color-elephant-900);--input-disabled-bg:var(--color-smoke-25);--input-hover-color:var(--color-smoke-700);--input-focus-color:var(--color-azure-800);--input-border:var(--color-smoke-100);--warning-color:var(--color-casablanca-100)}label{font-size:var(--font-size-12);font-weight:var(--font-weight-500);color:var(--color-elephant-900);margin-bottom:0;padding-bottom:4px;padding-left:2px;display:block}label.required:after{content:\"*\";position:relative;display:inline-block;top:2px;font-size:var(--font-size-14);color:var(--error-color);padding-left:2px}.input-container-inner{display:block;width:100%;position:relative}.input-container-inner input{border:none;margin-top:3px;font-size:var(--font-size-12);font-weight:var(--font-weight-500);letter-spacing:0;line-height:1.4;background-color:var(--input-bg)}.input-container-inner input:focus{border:none;outline:none}.input-container-inner input.multi-select{width:auto}.input-container-inner.error>input{border-color:var(--error-color)}.input-container-inner.error>input:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--error-color)}.input-container-inner.error>input:hover{border-color:var(--error-color)}.input-container-inner.error+.help-block{color:var(--error-color)}.input-container-inner.warning>input{border-color:var(--warning-color)}.input-container-inner.warning>input:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--warning-color)}.input-container-inner.warning>input:hover{border-color:var(--warning-color)}.input-container-inner.warning+.help-block{color:var(--warning-color)}.input-container{width:calc(100% - 10px);border:0;border:1px solid var(--input-border);margin:5px 0 0;border-radius:4px;padding:4px 0 4px 10px;background-color:var(--input-bg);-webkit-box-shadow:none;box-shadow:none;min-height:24px;display:inline-block}.input-container:hover{border:1px var(--input-hover-color) solid;-webkit-transition:.2s linear;transition:.2s linear}.input-container[disabled]{color:var(--color-smoke-50);background-color:var(--input-disabled-bg);border-style:solid}.input-container[disabled]:hover{border:1px solid var(--input-border);cursor:not-allowed}:host(.has-focus) .input-container{outline:none;background:var(--input-bg);border:1px solid transparent;-webkit-box-shadow:0 0 0 2px var(--input-focus-color);box-shadow:0 0 0 2px var(--input-focus-color)}.select-container{margin-bottom:16px;width:inherit;height:inherit}.select-container ul{max-height:150px;overflow-y:scroll;overflow-x:hidden;padding:8px;list-style:none;margin:0;border-radius:4px;margin-top:2px;display:none;position:absolute;z-index:1;background:var(--input-bg);width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;-webkit-box-shadow:0 2px 18px 0 rgba(18,52,77,.16),0 2px 4px 0 rgba(18,52,77,.06);box-shadow:0 2px 18px 0 rgba(18,52,77,.16),0 2px 4px 0 rgba(18,52,77,.06);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:dropdown-fade .15s;animation:dropdown-fade .15s;will-change:auto}.select-container .dropdown-status-icon{position:absolute;display:inline-block;right:12px;content:\"\";top:45%;width:5px;height:5px;background-color:transparent;border-style:inherit;border-top:1px solid #12344d;border-right:1px solid #12344d;border-left:transparent;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-transition:all .15s;transition:all .15s}.select-container .help-block{font-size:var(--font-size-12);margin-top:3px;color:var(--help-color);position:inherit;margin-bottom:0;display:block;padding-left:2px}.select-container .dropdown-status-icon.expanded{-webkit-transform:rotate(315deg);transform:rotate(315deg)}::-webkit-input-placeholder{color:var(--color-smoke-300);opacity:1}::-moz-placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{opacity:1}::-ms-input-placeholder{opacity:1}::placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{color:var(--color-smoke-300)}::-ms-input-placeholder{color:var(--color-smoke-300)}\@-webkit-keyframes dropdown-fade{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}50%{opacity:.7;-webkit-transform:translateY(-5%);transform:translateY(-5%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes dropdown-fade{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}50%{opacity:.7;-webkit-transform:translateY(-5%);transform:translateY(-5%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}"}};export{n as fw_select};