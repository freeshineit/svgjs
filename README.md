# Svg

## Use

```bash
#
yarn install

# development
yarn run dev

# production
yarn run build

# https://github.com/http-party/http-server
# version >= 14
cd docs && http-server -p 8080 .

```


## svg element

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="svg">
    <!-- g标签用于将多个形状组成一组（group） -->
    <g>
        <text x="20" y="20" fill="blue">圆</text>
        <!-- cx/cy 是圆心的位置（相对于svg）  -->
        <circle id="circle1" cx="40" cy="50" r="20" fill="green" />
    </g>
    <g>
        <text x="20" y="120" fill="blue">椭圆</text>
        <!-- 椭圆  -->
        <ellipse cx="40" cy="180" ry="40" rx="20" stroke="black" stroke-width="1" fill="red" />
    </g>
    <g>
        <text x="20" y="260" fill="blue">线</text>
        <!-- 线 -->
        <line x1="20" y1="300" x2="100" y2="340" style="stroke:rgb(0,0,0);stroke-width:1" />
    </g>
    <g>
        <text x="20" y="380" fill="blue">矩形</text>
        <!-- 矩形 -->
        <rect x="20" y="400" height="100" width="200" style="stroke: #70d5dd; fill: red" />
    </g>
    <!-- 文本 -->
    <text x="20" y="550" fill="blue">文本</text>

    <g>
        <text x="20" y="600" fill="blue">多边形 (多个点组成的封闭多边形) </text>
        <!-- 多边形 (多个点组成的封闭多边形) -->
        <polygon points="60,620 100,640 100,680 60,700 20,680 20,640" fill="red" />
    </g>
    <g>
        <text x="20" y="780" fill="blue"> 路径（这个比较难，一般都是由设计师画好生成的）</text>
        <!-- 路径（这个比较难，一般都是设计师画好生成的） -->
        <!-- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths -->
        <path d="M 20 850 
                C 40 820, 65 820, 95 850 
                S 150 850, 180 850" stroke="red" fill="transparent" />
    </g>
</svg>
```