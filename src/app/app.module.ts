import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';      //引入ant-design
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; //引入路由
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';
import { ShopComponent } from './components/shop/shop.component';
import { UserlistComponent } from './components/user/userlist/userlist.component';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { EdituserComponent } from './components/user/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    ShopComponent,
    UserlistComponent,
    AdduserComponent,
    EdituserComponent
  ],
  imports: [//当前的项目依赖哪些模块
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(), //引入ant-design
    AppRoutingModule            
  ],
  providers: [], /*定义的服务  回头放在这个里面*/
  bootstrap: [ AppComponent ]//默认启动那个组件
})
export class AppModule { }