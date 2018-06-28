<h1>公司前端框架总结</h1>

<h2>Index</h2>
<details>
    <summary>目录</summary>
    <ul>
        <li>
            <a href="#vim">vim常用命令</a>
        </li>
        <li>
            <a href="#myConfig">我的配置</a>
        </li>
        <li>
            <a href="#app">app</a>
        </li>
        <li>
            <a href='#web'>web</a>
        </li>
    </ul>
</details>

<h2 id='vim'>vim常用</h2>
<table>
    <tr>
        <td>替换</td>
        <td>:%s/待替换/替换为</td>
    </tr>
    <tr>
        <td>查找项目代码</td>
        <td>:vim /xxx/ 路径 cw, ccl</td>
    </tr>
    <tr>
        <td>水平增加</td>
        <td>:vertical res +10</td>
    </tr>
    <tr>
        <td>垂直增加</td>
        <td>:res +10</td>
    </tr>
</table>
<h2 id='myConfig'>我的配置</h2>
<details>
    <summary>iTerms</summary>
    <ul>
        <li>官网下载iTerms</li>
        <li>安装node, git</li>
        <li>npm install youdao/http-server/livereload </li>
        <li> 设置透明(Perference-Profiles-Window-Transparency)</li>
        <li>设置全屏依然半透明(Perference-General-Native full screen windows)</li>
    </ul>
</details>
<details>
    <summary>securtCRT</summary>
    <ul>
        <li>下载(securtCRT 史蒂芬周的博客)</li>
        <li>
            连接服务器
            <div>
                <img src="./img/svn.png" alt="" width=400 height: 300>
            </div>
        </li>
        <li>
            我的习惯
            <pre>
                curl -L  z.sh 到 ~/z.sh
                curl -L bashrc.sh为 ~/.bashrc
                curl -L vimrc ~/.vimrc
                我的bashrc配置
                alias h='cd /html-path/'
            </pre>
        </li>
    </ul>
</details>

<details>
    <summary>翻墙工具</summary>
    <ul>
        <li>蓝灯: https://github.com/getlantern/lantern</li>
        <li>shadowsocks: https://portal.shadowsocks.com/clientarea.php?language=chinese</li>
    </ul>
</details>

<details>
    <summary>其他工具</summary>
    <ul>
        <li>paste(关键词: xclient paste mac)</li>
        <li>搜狗输入法(设置 中英文都用英文标点)</li>
        <li>xsope(关键词: xclient xcope mac)</li>
    </ul>
</details>

<h2>默认规则</h2>
<table>
    <tr>
        <td>超级管理员</td>
        <td>manage/adminlogin/super</td>
    </tr>
</table>

<hr>
<h2>代码</h2>
1.
<a id="app" href="./app.js">app</a>
<br> 2.
<a href="./web.js">web</a>
    