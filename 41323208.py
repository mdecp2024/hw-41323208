def draw_triangle():
    height = 5  # 三角形高度
    for i in range(height):
        spaces = ' ' * (height - i - 1)  # 计算空格数
        stars = '*' * (2 * i + 1)        # 计算星号数
        print(spaces + stars)

draw_triangle()
