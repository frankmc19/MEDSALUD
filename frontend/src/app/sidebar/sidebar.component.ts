import { Component, OnInit } from '@angular/core';
import { Servicio } from '../citas/models/servicio.model';
import { ServicioService } from '../citas/services/servicio.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/categoria', title: 'Categorias', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-historia', title: 'Gestionar Historia Clinica', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-citas', title: 'Gestionar Citas', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-caja', title: 'Gestionar Caja', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-perfil', title: 'Gestionar Perfil', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-especialidad', title: 'GestionarEspecialidad', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/chat-bot', title: 'Chat Bot', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/consultar-agenda', title: 'Consultar agenda', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/consultar-horario', title: 'Consultar horario', icon: 'pe-7s-news-paper', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  servicios: Servicio[] = [];
  servicioS:Servicio;

  constructor(private servicioService: ServicioService) { }

  async ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems.push()
    var dataServicios = await this.servicioService.listar().toPromise();
    this.servicios = dataServicios.data
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
  Seleccion(valor){
    this.servicioS = this.servicios.find(item => item._id?.trim() == valor);
    this.servicioService.servicioSeleccionado=this.servicioS; 
}
}
