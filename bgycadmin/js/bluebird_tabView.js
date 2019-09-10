    function 高级选项卡(name,event){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 高级选项卡(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;

        //组件命令：
        this.置选项卡数量 = function (value){
            //这个是为了兼容以前的版本，故保留这个命令的声明
        }
        
        //组件命令：
        this.置选项卡标题 = function (index,title){
            var tabview = document.getElementById(this.名称);
			var indicator = tabview.getElementsByClassName("mui-slider-indicator");
			if(indicator.length>0){
                var control = indicator[0].getElementsByClassName("mui-control-item")[index];
                control.innerHTML = title;			
			}
        }  
        
        //组件命令：
        this.取选项卡标题 = function (index){
            var tabview = document.getElementById(this.名称);
			var indicator = tabview.getElementsByClassName("mui-slider-indicator");
			if(indicator.length>0){
                var control = indicator[0].getElementsByClassName("mui-control-item")[index];
                return control.innerHTML;  
			}else{
                return "";
			}         
        }  

        //组件命令：
        this.添加组件 = function (index,viewName){
			//var item = document.getElementById(this.名称 + "_item" + index);//苹果系统里不支持中文ID
			var item = document.getElementById("gaojixuanxiangka_item" + index);
			var child = document.getElementById(viewName);
            var parent = child.parentNode;
			parent.removeChild(child);
			item.appendChild(child);
			if(parent.className!="mui-content"){
				parent.parentNode.removeChild(parent);//如果组件元素之前的父元素不是mui-content,则从mui-content上删除该父元素
			}
        } 

        //组件命令：
        this.置激活颜色 = function (color){			
            var tabview = document.getElementById(this.名称);
			var indicator = tabview.getElementsByClassName("mui-slider-indicator")[0];
			var temp = "mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-"
			switch(color){
				case 1:
					indicator.className = temp + "primary";	//蓝色				
				break;
				case 2:
					indicator.className = temp + "positive"; //绿色		
				break;
				case 3:
					indicator.className = temp + "negative"; //红色	
				break;			
			}						
        } 

        //组件命令：
        this.置背景颜色 = function (color){
        	var tabview = document.getElementById(this.名称);
			tabview.style.background = color;
		}

        //组件命令：
        this.置现行选项卡 = function (index){	
            var gallery = mui("#"+this.名称);
            gallery.slider().gotoItem(index);
		}
		
        //组件命令：
        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="";//显示，也可以设置为block	                
            }else{
                var div = document.getElementById(this.名称);
                div.style.display="none"; //不占位隐藏               
            }
        } 
        
        //组件命令：
        this.置可视2 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.visibility="visible";//显示	                
            }else{
                var div = document.getElementById(this.名称);
                div.style.visibility="hidden"; //占位隐藏               
            }
        } 
        
        //组件事件
        if(event!=null){
 			document.getElementById(this.名称).addEventListener("slide", function (e) {
                event(e.detail.slideNumber);//触发组件的"选项卡被切换"事件
            });       	
        }
    }