var hoverEffect = true; // set true for hover effect, set false for no hover effect

var searchEngine = 'google'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 3; // set number of screens (1 or 2 or 3)
 
var blockName = new Array(); // set names of blocks
blockName[1] = 'About 瑞.com';
blockName[2] = '经常访问';
blockName[3] = '鎴戠殑浣滃搧';

var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();

// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// FIRST BLOCK
bookmark[0][0] = {
	'title':'blog',
	'url':'http://aboutrui.com/blog/',
	'thumb':'blog.png'
};
bookmark[0][1] = {
	'title':'zhihu',
	'url':'http://http://www.zhihu.com/people/qiao-ba-rui',
	'thumb':'zhihu.png'
};
bookmark[0][2] = {
	'title':'bokedaohang',
	'url':'http://www.bokedaohang.com/',
	'thumb':'bokedaohang.png'
};
bookmark[0][3] = {
	'title':'xiami',
	'url':'http://www.xiami.com/u/896152',
	'thumb':'xiami.png'
};
bookmark[0][4] = {
	'title':'douban',
	'url':'http://www.douban.com/people/mouse520fox/',
	'thumb':'douban.png'
};
bookmark[0][5] = {
	'title':'weibo',
	'url':'http://weibo.com/orange7171',
	'thumb':'weibo.png'
};
bookmark[0][6] = {
	'title':'readeep',
	'url':'http://readeep.diandian.com/',
	'thumb':'readeep.png'
};
bookmark[0][7] = {
	'title':'diandian',
	'url':'http://chopperrui.diandian.com/',
	'thumb':'diandian.png'
};
bookmark[0][8] = {
	'title':'work',
	'url':'http://www.duitang.com/people/1723794531/',
	'thumb':'work.png'
};
bookmark[0][9] = {
	'title':'github',
	'url':'https://github.com/forecho',
	'thumb':'github.png'
};
bookmark[0][10] = {
	'title':'lib',
	'url':'http://www.forecho.com/Fecms/index.php/feadmin/',
	'thumb':'lib.png'
};
bookmark[0][11] = {
	'title':'niyabizui',
	'url':'http://www.niyabizui.com/',
	'thumb':'niyabizui.png'
};
// end of FIRST BLOCK
// SECOND BLOCK
bookmark[1][0] = {
	'title':'gmail',
	'url':'https://mail.google.com/',
	'thumb':'gmail.png'
};
bookmark[1][1] = {
	'title':'segmentfault',
	'url':'http://www.segmentfault.com/',
	'thumb':'segmentfault.png'
};
bookmark[1][2] = {
	'title':'ikeepu',
	'url':'http://www.ikeepu.com/',
	'thumb':'ikeepu.png'
};
bookmark[1][3] = {
	'title':'xianguo',
	'url':'http://xianguo.com/',
	'thumb':'xianguo.png'
};
bookmark[1][4] = {
	'title':'mtime',
	'url':'http://www.mtime.com/',
	'thumb':'mtime.png'
};
bookmark[1][5] = {
	'title':'reader',
	'url':'http://www.google.com/reader/',
	'thumb':'reader.png'
};
bookmark[1][6] = {
	'title':'lofter',
	'url':'http://www.lofter.com/',
	'thumb':'lofter.png'
};
bookmark[1][7] = {
	'title':'ucdchina',
	'url':'http://www.oschina.net/',
	'thumb':'ucdchina.png'
};
bookmark[1][8] = {
	'title':'yeeyan',
	'url':'http://www.yeeyan.com/',
	'thumb':'yeeyan.png'
};
bookmark[1][9] = {
	'title':'oschina',
	'url':'http://www.oschina.net/',
	'thumb':'oschina.png'
};
bookmark[1][10] = {
	'title':'yuedu163',
	'url':'http://yuedu.163.com/mysubs.do?operation=source',
	'thumb':'yuedu163.png'
};
bookmark[1][11] = {
	// 'title':'domarketing',
	// 'url':'http://www.domarketing.org/',
	// 'thumb':'domarketing.png'
	'title':'v2ex',
	'url':'http://www.v2ex.com/',
	'thumb':'v2ex.png'
};
//end of SECOND BLOCK
// THIRD BLOCK
bookmark[2][0] = {
	'title':'eurosport',
	'url':'http://www.eurosport.com/',
	'thumb':'eurosport.png'
};
bookmark[2][1] = {
	'title':'amazon',
	'url':'http://www.amazon.com/',
	'thumb':'amazon.png'
};
bookmark[2][2] = {
	'title':'eBay',
	'url':'http://www.ebay.com/',
	'thumb':'ebay.png'
};
bookmark[2][3] = {
	'title':'IMDb',
	'url':'http://www.imdb.com/',
	'thumb':'imdb.png'
};
bookmark[2][4] = {
	'title':'vimeo',
	'url':'http://vimeo.com',
	'thumb':'vimeo.png'
};
bookmark[2][5] = {
	'title':'lifehacker',
	'url':'http://lifehacker.com/',
	'thumb':'lifehacker.png'
};
bookmark[2][6] = {
	'title':'engadged',
	'url':'http://www.engadget.com/',
	'thumb':'engadget.png'
};
bookmark[2][7] = {
	'title':'zune',
	'url':'http://www.zune.net/',
	'thumb':'zune.png'
};
bookmark[2][8] = {
	'title':'dropbox',
	'url':'http://www.dropbox.com/',
	'thumb':'dropbox.png'
};
bookmark[2][9] = {
	'title':'National Geographic',
	'url':'http://www.nationalgeographic.com/',
	'thumb':'natgeo.png'
};
bookmark[2][10] = {
	'title':'CBC news',
	'url':'http://www.cbc.ca/news/',
	'thumb':'cbcnews.png'
};
bookmark[2][11] = {
	'title':'weather.com',
	'url':'http://www.weather.com/',
	'thumb':'weather.png'
};