    function 渐渐三行列表框(name,event){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 渐渐三行列表框(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        this.项目总数 = 0;
		
		this.添加项目 = function(标题,信息1,信息2,时间,项目标记){
			var div = document.createElement("li");//创建一个卡片节点
			div.id = "sanhanjj" + this.项目总数;
			div.className = "mui-table-view-cell";//设置类名
			div.setAttribute("index",""+this.项目总数);//设置项目索引
			this.项目总数 = this.项目总数+1;
			div.setAttribute("tag",项目标记);//设置项目索引
			div.innerHTML = "	<div class='mui-table'>\n"+
			"		<div class='mui-table-cell mui-col-xs-10'>\n"+
			"		    <h4 class='mui-ellipsis'>"+标题+"</h4>\n"+
			"		    <h5 style='overflow: hidden; white-space: nowrap; text-overflow: ellipsis;width:250px;'>"+信息1+"</h5>\n"+
			"		    <p class='mui-h6 mui-ellipsis' style='overflow: hidden; white-space: nowrap; text-overflow: ellipsis;width:250px;'>"+信息2+"</p>\n"+
			"		 </div>\n"+
			"		 <div class='mui-table-cell mui-col-xs-2 mui-text-right'>\n"+
			"		      <span class='mui-h5'>"+时间+"</span>\n"+
			"		 </div>\n"+
			"	</div>"
            var root = document.getElementById(this.名称);
			root.appendChild(div);//将卡片节点添加到卡片列表根节点
		}
		
		this.取项目总数 = function (){
			return document.getElementById(this.名称).getElementsByClassName("mui-table-view-cell").length;
		}
		
		this.删除项目 = function(表项索引){
			var item = document.getElementById("sanhanjj"+表项索引);
			if (item == null){
				return;
			}
			item.parentNode.removeChild(item);//删除项目节点
			
			item = document.getElementById(this.名称).getElementsByClassName("mui-table-view-cell");
			for(var i = 0;i < item.length; i++){//刷新全部项目索引				
				item[i].setAttribute("id","sanhanjj"+i);
				item[i].setAttribute("index",i);
				this.项目总数 = this.项目总数-1;
			}
		}
		
		this.取项目标记 = function(表项索引){
			return document.getElementById("sanhanjj" + 表项索引).getAttribute("tag");
		}
		
		this.清空项目 = function(){
			var root = document.getElementById(this.名称);
			while(root.hasChildNodes()){
				root.removeChild(root.firstChild);
				this.项目总数 = 0;
			}
		}
		
        //组件命令：
        this.置标题 = function (newTitle){
            document.getElementById(this.名称).innerHTML=newTitle;
        } 
        
        //组件命令：
        this.取标题 = function (){
           return document.getElementById(this.名称).innerHTML;
        }  
        
        //组件命令：
        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称).parentNode;
                div.style.display="block";//显示	                
            }else{
                var div = document.getElementById(this.名称).parentNode;
                div.style.display="none"; //不占位隐藏               
            }
        } 
        
        //组件命令：
        this.置可视2 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称).parentNode;
                div.style.visibility="visible";//显示	                
            }else{
                var div = document.getElementById(this.名称).parentNode;
                div.style.visibility="hidden"; //占位隐藏               
            }
        } 
        
        //组件事件
        if(event!=null){
 			mui("#"+this.名称).on("tap", ".mui-table-view-cell", function() {
				var index = this.getAttribute("index");
                event(Number(index));//触发组件的相关事件，这里的是"表项内容被单击"事件
            });   	
        }
    }