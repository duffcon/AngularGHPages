```
ng new GHPagesTest
```



```bash
#.gitignore
.vs/*
```



```bash
ng generate component Nav
ng generate component A
ng generate component B
```



```bash
npm install --save jquery
npm install --save bootstrap
```





```ts
//app.module.ts
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =
  [
    { path: 'A', component: AComponent },
    { path: 'B', component: BComponent },
    { path: '**', component: AComponent }
  ];

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
```




```html
//app.component.html
<div >
  <app-nav></app-nav>
</div>
<div class=' col-lg-12 body-content'>
  <router-outlet></router-outlet>
</div>
```


```html
//nav.component.html
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <a style="color:whitesmoke" class="navbar-brand">NaV</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" [routerLink]="['A']" [routerLinkActive]="['active']">A <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" [routerLink]="['B']" [routerLinkActive]="['active']">B</a>

    </div>
  </div>
</nav>
```

```ts
//a.component.ts
public list = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"];
```

```ts
//b.component.ts
public list = ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"];
```


```html
a.component.html
<div class="contaier-fluid">
  <div class="row justify-content-center">
        <table >
          <tr *ngFor="let i of list;">
            <td> {{i}}</td>
          </tr>
        </table>
  </div>
</div>
```


```html
a.component.html
<div class="contaier-fluid">
  <div class="row justify-content-center">
        <table >
          <tr *ngFor="let i of list;">
            <td> {{i}}</td>
          </tr>
        </table>
  </div>
</div>
```




```bash
git add .
git commit -m 'message'
git checkout -b 1.One
```


github.com

Create a new repository: AngularGHPages

```
ng build --prod --output-path docs --base-href AngularGHPages
git add .
git commit -m 'message'
git checkout master
git merge 1.Branch
git add remote origin
git remote add origin https://github.com/duffcon/AngularGHPages.git
git push -u origin master
```

https://github.com/duffcon/AngularGHPages/settings

Scroll down to GitHub Pages > Source master branch /docs folder > Save

Website availabale at: https://duffcon.github.io/AngularGHPages/
