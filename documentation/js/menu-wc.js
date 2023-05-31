'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ticket-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' : 'data-target="#xs-controllers-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' :
                                            'id="xs-controllers-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' : 'data-target="#xs-injectables-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' :
                                        'id="xs-injectables-links-module-AppModule-c6db710f457447e0277fdbd23d8202ddb2813dacd5d8c11795428f1961369c2910bf91611c206a48777d8e898357669b7dc8e3638a1b450b3fdbc53bed12247b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' : 'data-target="#xs-controllers-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' :
                                            'id="xs-controllers-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' : 'data-target="#xs-injectables-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' :
                                        'id="xs-injectables-links-module-AuthModule-1dfed7f2e5a291dc6fce387d9ad2ced921c4af30b7835c4315e6a326a15f555f710e8281fea610894f43090954bae60d0421427465a937964e6153e093f09bf9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventModule.html" data-type="entity-link" >EventModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' : 'data-target="#xs-controllers-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' :
                                            'id="xs-controllers-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' }>
                                            <li class="link">
                                                <a href="controllers/EventController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' : 'data-target="#xs-injectables-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' :
                                        'id="xs-injectables-links-module-EventModule-f3a0042496e21cec62668a8169c842326860b369958b5df23a061c9658ba361f9f893f83d49370e40c265a979dd498dc9a87a6f26bb21fb63ba68043a0d2c636"' }>
                                        <li class="link">
                                            <a href="injectables/EventService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GlobalModule.html" data-type="entity-link" >GlobalModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GlobalModule-4ab8cd0c385ef88a3f61ab256418899d107929610acef0496acdac7de8c9f161148ec7c822b85a7deb241c0c6254c6ad875e6da18f4f661cb7e5c72830598132"' : 'data-target="#xs-injectables-links-module-GlobalModule-4ab8cd0c385ef88a3f61ab256418899d107929610acef0496acdac7de8c9f161148ec7c822b85a7deb241c0c6254c6ad875e6da18f4f661cb7e5c72830598132"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GlobalModule-4ab8cd0c385ef88a3f61ab256418899d107929610acef0496acdac7de8c9f161148ec7c822b85a7deb241c0c6254c6ad875e6da18f4f661cb7e5c72830598132"' :
                                        'id="xs-injectables-links-module-GlobalModule-4ab8cd0c385ef88a3f61ab256418899d107929610acef0496acdac7de8c9f161148ec7c822b85a7deb241c0c6254c6ad875e6da18f4f661cb7e5c72830598132"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' : 'data-target="#xs-controllers-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' :
                                            'id="xs-controllers-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' : 'data-target="#xs-injectables-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' :
                                        'id="xs-injectables-links-module-UserModule-33fa4215a50d7fae7414317621b112db81b0daf3831a97dbb3f07eef73e10ab6f2834413b277cfdf9afd7e3813cfc45941aa63bca1948f909c9978ab014b2977"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateEventDto.html" data-type="entity-link" >CreateEventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaClientExceptionFilter.html" data-type="entity-link" >PrismaClientExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEventDto.html" data-type="entity-link" >UpdateEventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});