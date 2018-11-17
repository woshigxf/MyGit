<!DOCTYPE html>
<html lang="en">
    <head>

        <title>页面预览</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
    
        <link href="css/base.css" rel="stylesheet" />
        <link href="css/easyui.css" rel="stylesheet" />
        <link href="css/ext.css" rel="stylesheet" />
        <link href="css/lightBox.css" rel="stylesheet" />
        <link href="css/common.css" rel="stylesheet" />
        <link href="css/browser.css" rel="stylesheet" />
        <link href="css/jqueryPager.css" rel="stylesheet" />
        <link href="css/hot.css" rel="stylesheet" />
        <link href="css/ruler.css" rel="stylesheet" />
    
        <script src="js/base.js"></script>
        <script src="js/easyui.js"></script>
        <script src="js/ext.js"></script>
        <script src="js/lightBox.js"></script>
        <script src="js/common.js"></script>
        <script src="js/browser.js"></script>
        <script src="js/md5.js"></script>
        <script src="js/jqueryPager.js"></script>
        <script src="zclip/zclip.js"></script>
        <script src="js/hot.js"></script>
        <script src="js/ruler.js"></script>
        
    </head>
<body>
    <div id="preview">
        <?php
            echo urldecode($_POST["code"]);
        ?>  
    </div>
</body>
</html>