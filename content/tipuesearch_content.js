var tipuesearch = {"pages": [{'title': 'about', 'text': 'Department of Mechanical Design Engineering, National Huwei University of Science and Technology \n National Taiwan University \n Department of Mechanical Design Engineering \n cp2024 computer program \n Course materials: \n Learn Python using Jupyter  (  website  ,  e-book  ) \n Education version account microsoftonline login point:\xa0  https://login.microsoftonline.com/ \n Team online teaching: \n Log in to https://login.microsoftonline.com/  Office 365  with "student ID@nfu.edu.tw" \n Teams team code: fpqabi8 \n Personal Ethereum:  https://github.com/mdecp2024/hw-41323208 \n Personal website:  https://mdecp2024.github.io/hw-41323208 \n Additional information: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n Website password: admin \n', 'tags': '', 'url': 'about.html'}, {'title': 'Attendance', 'text': 'Number of attendees (10%) – self-evidence scoring \n Use Github to submit submission records for scoring. \n \n \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': 'Topic: Browser-based decentralized version management and integrated solution development environment (10%) \n USB flash drive: \n Download  python_2025_lite.7z  (428 MB, about 1.5 GB after unzipping) \n Jupiter \n What are Github and Codespace? \n Hello World - GitHub Documentation \n Use a string containing your student ID as an account to apply for free use of Github. \n Python course materials:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n Part 1: Establish basic knowledge and organize information (10%) \n After starting the portable program system, in the command line: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n Enter  01_string_input_print.ipynb  to practice how to modify the PART1 notebook and save it. After uploading it to the download directory in the homework document, embed the  submitted  01_string_input_print.ipynb into the following web page through  https://nbviewer.org/  . \n \n The html syntax of the iframe annotation listed above: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n After completing the above process, enter the HW1 self-evaluation score into the cp2024 self-evaluation form. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'Hardware 1 exam', 'text': 'Practice good procedures in groups of six \n Through the excellent webpage of Jupyterlab, each group is assigned to write programming exercises related to topic 1 in turn, and edit the webpage content (localhost and Codespaces environment). \n', 'tags': '', 'url': 'Hardware 1 exam.html'}, {'title': 'w7', 'text': 'https://youtu.be/hoAvAYwxQdU \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一 \n \n 題目二 \n \n 題目三 \n 心得：覺得Python不僅可以繪製矩形 還能用Python解決物理和數學題目 期待之後能學到如何用Python製作小遊戲 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'HW\xa02', 'text': 'Topic: Python’s sequence, judgmental expressions and repeated loops (20%) \n Python course materials:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n Manila HW 1 web page data collection and program practice methods, organize the following (20%): \n Part 2: Introduction to lists and if/else statements \n Part 3: Introduction to for loops \n After completing the above process, enter the HW2 self-evaluation score into the cp2024 self-evaluation form. \n', 'tags': '', 'url': 'HW\xa02.html'}, {'title': 'Hardware 2 exam', 'text': "Practice good procedures in groups of six \n Through Jupyterlab's excellent web pages, each group is assigned to take turns to write HW 2-related program exercises and edit web content (localhost and Codespaces environments). \n \n", 'tags': '', 'url': 'Hardware 2 exam.html'}, {'title': 'wk2', 'text': "def draw_triangle():\n    height = 5  # 三角形高度\n    for i in range(height):\n        spaces = ' ' * (height - i - 1)  # 计算空格数\n        stars = '*' * (2 * i + 1)        # 计算星号数\n        print(spaces + stars)\n\ndraw_triangle()\n \n \n", 'tags': '', 'url': 'wk2.html'}, {'title': 'wk3', 'text': '\n 操作步驟: \n \n 下載\xa0 python_2025_lite.7z \xa0(可攜程式環境) \n 下載 \xa0 zmq_remote_api_ex_cube_triangle.7z \xa0(利用 Python 控制模擬場景中的物件) \n 進入可攜程式環境中 data/CoppeliaSim 目錄, 開啟 coppeliaSim.exe (機電整合模擬程式, \xa0 原始碼 ) \n 啟動可攜程式環境, 雙點擊 start_ipv6.bat, 系統會啟動四個命令列, 兩個 SciTE 編輯器 \n 執行場景控制程式前, 先處理操作系統的防火牆, 將下列指令存為 .bat 檔案後, 以管理員身分執行, 以便開啟 23000-23050 埠號進出: \n netsh advfirewall firewall add rule name="allow_23000-23050" dir=in action=allow protocol=TCP localport=23000-23050 netsh advfirewall firewall add rule name="allow_23000-23050" dir=out action=allow protocol=TCP localport=23000-23050 \n 開啟 CoppeliaSim 中的視覺串流伺服器: Modules - Connectivity - Visualization stream \n 利用 SciTE 開啟\xa0put_cubes_into_scene_1.py, 利用 Tools - Go 執行操控程式 \n 使用者可以透過瀏覽器, 以模擬場景所在電腦的 IP, 且埠號為 23020 觀看模擬場景 \n \n \n 1a site and re \n \n', 'tags': '', 'url': 'wk3.html'}, {'title': 'wk11', 'text': '心得：chatGPT很好的幫我解決了python程式上不理解的問題 還用python繪製圖案 \n \n 题目一 \n 题目二 \n \n def print_filled_circle(radius, center_x, center_y, size=10):\n    for y in range(size):\n        for x in range(size):\n            # 計算 (x, y) 點到圓心的距離\n            distance = (x - center_x) ** 2 + (y - center_y) ** 2\n            # 如果距離小於或等於半徑的平方，則是圓內的點，打印 *\n            if distance <= radius ** 2:\n                print(\'*\', end=\'\')\n            else:\n                print(\' \', end=\'\')\n        print()\n\n# 設定圓心在 (4, 4)，半徑為 4\nprint_filled_circle(radius=4, center_x=4, center_y=4) \n ----------------------------------------------------------------------------------------------------------------- \n from browser import html\nfrom browser import document as doc\n\n# 创建画布\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每个方块的大小\ngs = 20\n\n# 获取画布的 2D 上下文\nctx = canvas.getContext("2d")\n\n# 绘制矩形的函数，带黑色填充\ndef dRect(lux, luy, w, h, c=\'#ff0000\'):\n    ctx.fillStyle = c  # 填充颜色\n    ctx.fillRect(lux, luy, w, h)  # 绘制填充矩形\n\n# 绘制由黑色方块拼成的圆形图案\ndef drawCircleWithFilledBlackSquares(radius):\n    # 画布的中心点\n    cx, cy = canvas.width // 2, canvas.height // 2\n    # 计算网格数\n    for i in range(-radius, radius, gs):\n        for j in range(-radius, radius, gs):\n            # 当前网格的中心坐标\n            x = cx + i\n            y = cy + j\n            # 计算该网格到中心的距离\n            dist = (i ** 2 + j ** 2) ** 0.5\n            # 如果该网格的距离小于圆的半径，填充方块\n            if dist < radius:\n                dRect(x, y, gs, gs, "black")  # 填充黑色\n\n# 绘制由黑色方块填充的圆形\ndrawCircleWithFilledBlackSquares(100) \n \n \n', 'tags': '', 'url': 'wk11.html'}, {'title': 'HW\xa03', 'text': '\n Topic: Numbers, Algorithms and Loops in Python (20%) \n Python course materials:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n After completing the above process, enter the HW3 self-evaluation score into the cp2024 self-evaluation form. \n', 'tags': '', 'url': 'HW\xa03.html'}, {'title': 'Hardware 3 exam', 'text': "Practice good procedures in groups of six \n Through Jupyterlab's excellent web pages, each group is assigned to take turns to write HW 3-related program exercises and edit web content (localhost and Codespaces environments). \n", 'tags': '', 'url': 'Hardware 3 exam.html'}, {'title': 'HW\xa04', 'text': 'Topic: Using Python to control electromechanical simulation systems (20%) \n Use\xa0  https://solvespace.com/  \xa0to build mechanical system components \n Use  CoppeliaSim  to build an electromechanical simulation system \n Using  Python  to control the electromechanical analog system on the browser across the network \n example: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n After completing the above process, enter the HW4 self-evaluation score into the cp2024 self-evaluation form. \n', 'tags': '', 'url': 'HW\xa04.html'}, {'title': 'Hardware 4 exam', 'text': "Practice good procedures in groups of six \n Through Jupyterlab's excellent web pages, each group is assigned to take turns to write HW 4-related program exercises and edit web content (localhost and Codespaces environments). \n", 'tags': '', 'url': 'Hardware 4 exam.html'}, {'title': 'final report', 'text': 'Final dental and written special report (20%) \n Final oral report video: \n ..... \n Final written special report file (pdf): \n ..... \n Summary of computer-aided design and internship course: \n ..... \n Final self-reported evaluation scores: \n After completing the above process, accept the final report self-evaluation score and enter it into the cp2024 self-evaluation form. \n', 'tags': '', 'url': 'final report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};