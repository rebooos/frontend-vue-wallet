<template>
    <div class="app-main-layout">
        
        <div class="navbar-fixed">
            <nav>
                <a href="#" class="brand-logo">Wallet</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </nav>
        </div>
        

        <main class="app-content">
            <div class="app-page">
                <router-view/>
            </div>
        </main>


        <div class="fixed-action-btn">
            <a class="btn-floating btn-large green" href="#">
                <i class="large material-icon">add</i>
            </a>
        </div>
    </div>
</template>