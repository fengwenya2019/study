module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		// 有且仅有一个参数的箭头函数里可省略'()'
		'arrow-parens': ['error', 'as-needed'],
		// 禁止使用行尾空白（空格、tab 和其它 Unicode 空白字符)
		'no-trailing-spaces': ['off'],
		// 禁止使用 console
		'no-console': ['off'],
		// 禁止在返回语句中赋值，比如 return foo = bar + 2; >>>>>> return foo == bar + 2;
		'no-return-assign': ['off'],
		// 禁止对函数参数再赋值
		'no-param-reassign': ['off'],
		// 要求或禁止使用拖尾逗号(末尾逗号)
		// # always-multiline：
		// - 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；
		// - 当在 同一行时，禁止使用拖尾逗号。
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		// 禁止标识符中有悬空下划线
		// # allowAfterSuper
		// - 允许在 super 对象的成员变量上使用悬空下划线
		// # allowAfterThis
		// - 允许在 this 对象的成员变量上使用悬空下划线
		'no-underscore-dangle': [
			'error',
			{
				allowAfterSuper: true,
				allowAfterThis: true,
			},
		],
		// 强制在花括号中使用一致的空格 比如：var obj = { foo: "bar" }; >>>>>>  var obj = {foo: "bar"};
		'object-curly-spacing': ['error', 'never'],
		// 每个缩进级别由 2 个空格组成，而不是使用 tab
		// - switch 语句缩进 2 个空格。
		indent: [
			'error',
			2,
			{
				SwitchCase: 1,
			},
		],
		// 限制最大长度(120)，指定tab字符的宽度为2
		// - 忽略所有拖尾注释和行内注释
		'max-len': [
			'error',
			120,
			2,
			{
				ignoreComments: true,
			},
		],
		// 禁止申明变量后却不使用
		'no-unused-vars': ['error'],
		// jsx语法缩进为2个空格
		'react/jsx-indent': ['error', 2],
		// 禁止使用数组索引作为key
		'react/no-array-index-key': ['error'],
		// 允许在.js和.jsx文件中使用jsx语法
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx'],
			},
		],
		// 使用JSx时，必须引入React var React = require('react');
		// @off
		'react/react-in-jsx-scope': ['off'],
		// 强制执行无状态的React Components作为纯函数
		// - 忽略使用this.props或this.context从React.PureComponent扩展的组件
		'react/prefer-stateless-function': [
			0,
			{
				ignorePureComponents: true,
			},
		],
		'react/prop-types': ['off'],
		// 在类的非静态方法中，必须存在对 this 的引用
		// @off 太严格了
		'class-methods-use-this': ['off'],
		// 禁止给div span这类本身不具有事件的dom元素绑定事件
		// @off 拿span标签做按钮还是挺常见的
		'jsx-a11y/no-static-element-interactions': ['off'],
		// 禁止使用无关的包裹
		// @off
		'import/no-extraneous-dependencies': ['off'],
		// 禁止强制执行组件方式的顺序
		// @off
		'react/sort-comp': ['off'],
		// 强制使用一致的换行风格
		"linebreak-style": [
			"error",
			"unix"
		],

		// 禁止使用分号代替 ASI
		semi: ['error', 'never'],
	}
};
