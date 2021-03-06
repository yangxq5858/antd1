import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ShopComponent } from './components/shop/shop.component';
import { UserComponent } from './components/user/user.component';
import { UserlistComponent } from './components/user/userlist/userlist.component';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { EdituserComponent } from './components/user/edituser/edituser.component';

//配置路由
const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
   
  },
   {
    path: 'product',
    component:ProductComponent 

  },
  {
    path: 'shop',
    component:ShopComponent 

  },
  {
    path: 'user',
    component:UserComponent,
     children:[   /*配置子路由*/
      {
        path: 'list',
        component:UserlistComponent 
    
      },
      {
        path: 'add',
        component:AdduserComponent 
    
      },
      {
        path: 'edit',
        component:EdituserComponent 
    
      },{   
        path: '**',  /*任意的路由*/
        // component:HomeComponent
        redirectTo:'list'
      }
      
    ]

  }
  ,{   /*匹配不到路由的时候加载的组件*/
    path: '**',  /*任意的路由*/
    // component:HomeComponent
    redirectTo:'home'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
