import Vue from 'vue'
import {
    Button, Form, FormItem, Breadcrumb, BreadcrumbItem, Card, Row, Col,
    Menu, Submenu,MessageBox,Select,Option,Tree, MenuItem,Tag, Dialog, Input, Pagination, Message, Container, Header, Aside, Main, Table, TableColumn, Switch, Tooltip
} from 'element-ui'


Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Option)
Vue.use(Select)


