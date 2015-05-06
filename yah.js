<!DOCTYPE html>
<html>
<head>
<title>用户中心-买到的商品</title>
<meta charset="utf-8" />
<link href="css/usercenterNav2-style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="top"><!--begin头部-->
        <div class="topLeft inline-block">
            <ul>
                <li><img src="img/location.png" alt="定位"></li>
                <li>
                    <p class="topLeft-label">位置:</p>
                </li>
                <li>
                    <p class="topLeft-value">羊城创意园</p>
                </li>
                <li><a href="#">[修改地址]</a></li>
            </ul>
            <ul>
                <li><img src="img/ledou.png" alt="范围"></li>
                <li>
                    <p class="topLeft-label">范围:</p>
                </li>
                <li>
                    <p class="topLeft-value">1.5km</p>
                </li>
                <li><a href="#">[修改地址]</a></li>
            </ul>
        </div>
		<div class="topRight">
			<img src="img/test.jpg" />
			<p>xqzhiyong</p>
			<div class="exit-bg">
			</div>
			<a class="button-exit">退出</a>
		</div>
</div><!--end头部-->
<div class="container"> <!--begin中部内容-->
	<div class="userInfo-box">
		<div class="bg-uInfo-box">
		</div>
		<img class="user-headimg" src="img/test.jpg" />
		<p class="username">一叶落知天下秋</p>
		<div class="user-lev">
			<label>用户等级:</label>
			<p class="process" id="process1"><span></span></p>
			<span class="process-tips">10级</span>		</div>
		<div class="account-pro">
			<label>账号安全:</label>
			<p class="process" id="process2"><span></span></p>
			<span class="process-tips" id="process-tips2">不安全</span>		</div>
		<div class="userInfo-box-bts">
			<a href="">
				<img src="img/bg-bt1.png" />
				<p>待付款<span>(2)</span></p>
			</a>
		</div>
		<div class="userInfo-box-bts">
			<a href="">
				<img src="img/bg-bt2.png" />
				<p>配送中<span>(1)</span></p>
			</a>
		</div>
		<div class="userInfo-box-bts">
			<a href="">
				<img src="img/bg-bt3.png" />
				<p>已预约<span>(3)</span></p>
			</a>
		</div>
		<div class="userInfo-box-bts">
			<a href="">
				<img src="img/bg-bt4.png" />
				<p>待评价<span>(0)</span></p>
			</a>
		</div>
		<div class="aside-l-d">
			<div class="triangle-right"></div>
			<div class="triangle-left"></div>
		</div>
	</div><!--end用户框-->
	<div class="nav">
		<a>我的购物车
		</a>
		<a>我买到的商品
		</a>
		<a>预约管理
		</a>
		<a>我的优惠信息
		</a>
		<a>评价管理
		</a>
		<ul id="menu-d1">我的关注
			<span></span>
			<li><a href="#">商品收藏</a></li>
			<li>超市收藏</li>
			<li>最近访问</li>
		</ul>
		<ul id="menu-d2">退款与维权
			<span></span>
			<li>退款管理</li>
			<li>我的投诉</li>
			<li>我要维权</li>
		</ul>
		<ul id="menu-d3">账号设置
			<span></span>
			<li>个人信息</li>
			<li>位置信息</li>
			<li>账号安全</li>
		</ul>
		<div class="arr-u"></div>	
	</div>
	<div class="content" id="content">
		<form class="form-search"><!--begin搜索栏-->
			<input type="text" class="form-search-text" /><!--搜索框-->
			<input type="submit" class="form-search-submit" value="订单搜索" /> <!--订单搜索按钮-->
		</form><!--end搜索栏-->
		<form class="form-filter" id="form-filter"><!--begin筛选栏-->
			<p id="form-filter-normal">
				<label id="form-filter-name">订单筛选:</label>
				<label for="input-orders-status" class="form-filter-label1">订单状态</label>
				<select class="form-filter-input" id="input-orders-status">
						<option>已完成</option>
						<option>未完成</option>
				</select>
				<input type="submit" id="form-filter-submit" value="筛选"/>
			</p>
			<p class="form-filter-time">
				<label class="form-filter-label2">下单时间区间</label>
				<input type="text" id="date-start"  class="form-filter-input" />&nbsp;至
				<input type="text" id="date-end" class="form-filter-input form-filter-inputR" />
			</p>
			<p id="form-filter-cost">
				<label class="form-filter-label3">订单总价</label>
				<input type="text" class="form-filter-input" />&nbsp;至
				<input type="text" class="form-filter-input form-filter-inputR" />元
			</p>
			<span id="form-filter-close">收起↑</span>
		</form><!--end筛选栏-->
		<div class="arr-line" id="arr-line">
			<div class="form-filter-arrD1"></div><!--箭头-->
			<div class="form-filter-arrD2"></div><!--箭头-->
		</div>
		<div class="orders"><!--begin订单-->
			<div class="table-colName">	
				<span id="table-col1">商品</span>
				<span id="table-col2">单价</span>
				<span id="table-col3">数量</span>
				<span id="table-col4">订单总价（元）</span>
				<span id="table-col5">配送方式</span>
				<span id="table-col6">订单状态</span>
				<span id="table-col7">订单操作</span>		
			</div>
			<div class="order-table">
				<div class="order-top">
					<div class="order-top-l">
						<span class="label-orderId">订单号：<a href="">123456789</a></span>	
						<label class="label-orderTime">下单时间：<span>2015/05/20</span></label>		
					</div>
					<div class="order-top-r">
						<img src="img/test2.jpg" />
						<p class="order-table-srcName">华润万家超市（羊城分店)华润万家超市（羊城分店)华润万家超市（羊城分店)华润万家超市（羊城分店)华润万家超市（羊城分店)华润万家超市（羊城分店)华润万家超市（羊城分店)华润万家超市（羊城分店)华润万家超市（羊城分店)华润万家超市（羊城分店)华润万家超市（羊城分店)</p>
						<a href="#" class="a-complain">投诉</a>					</div>
				</div>
				<div class="order-table-li"> <!--只有一种商时-->
					<div class="goods-li">
						<a href=""><img class="goods-img" src="img/test.jpg" /></a>  <!--商品图片-->
						<p class="goods-info goods-info1"><a href="">奶油味夏威夷果</a></p>
						<p class="goods-info goods-info2">11525.0元/包</p>
						<p class="goods-info goods-info3">57871</p>
					</div>
						<p class="goods-info goods-info4">55485787.0</p>
						<div class="goods-info goods-info5">
							<p>超市花园配送</p>
							<p>货到付款</p>
						</div>
						<p class="goods-info goods-info6">配送中</p>
				 		<a href="#" class="order-refund">申请退款</a>
				</div>		
			</div>
			<div class="orders-table">
				<div class="orders-top">
					<div class="orders-top-l">
						<span class="label-orderId">订单号：<a href="">123456789</a></span>
						<label class="label-orderTime">下单时间：<span>2015/05/20</span></label>
					</div>
					<div class="orders-top-r">
						<img src="img/test2.jpg" />
						<a href="#" class="order-table-srcName">华润万家超市（羊城分店）</p>
						<a class="a-complain">投诉</a>					
					</div>
				</div>
				<div class="order-table-li"> <!--多个商品条目时-->
					<div class="order-table-l">
						<div class="goods-lis">
							<a href=""><img class="goods-img" src="img/test.jpg"/></a>  <!--商品图片-->
							<p class="goods-info goods-info1"><a href="">奶油味夏威夷果奶油味夏威夷果奶油味夏威夷果奶油味夏威夷果奶油味夏威夷果</a></p>
							<p class="goods-info goods-info2">11525.0元/包</p>
							<p class="goods-info goods-info3">57871</p>
						</div>
						<div class="goods-lis">
							<a href=""><img class="goods-img" src="img/test.jpg"/></a>  <!--商品图片-->
							<p class="goods-info goods-info1"><a href="">奶油味夏威夷果</a></p>
							<p class="goods-info goods-info2">11525.0元/包</p>
							<p class="goods-info goods-info3">57871</p>
						</div>
						<div class="goods-lis">
							<a href=""><img class="goods-img" src="img/test.jpg"/></a>  <!--商品图片-->
							<p class="goods-info goods-info1"><a href="">奶油味夏威夷果</a></p>
							<p class="goods-info goods-info2">11525.0元/包</p>
							<p class="goods-info goods-info3">57871</p>
						</div>
					</div>
					<div class="order-table-r">
						<p class="goods-info goods-info4">55485787.0</p>
						<div class="goods-info goods-info5">
							<p>超市花园配送</p>
							<p>货到付款</p>
						</div>
						<p class="goods-info goods-info6">配送中</p>
						<a class="order-refund" >申请退款</a>
					</div>
				</div>		
			</div>
		</div><!--end订单-->
		<div class="pageButttons" id="pageButttons"> <!--begin页码-->
			<div class="previousPage" id="previousPage">上一页</div>
			</div>
			<div class="pageNum" id="pageNum">
			</div>
			<div class="nextPage" id="nextPage">下一页
			</div>
		</div><!--end页码-->
	</div>
</div><!--end中部内容-->
</body>
<script src="laydate/laydate.js"></script>
<script src="js/usercenterNav2Page.js"></script>
</html>
