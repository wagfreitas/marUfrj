import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-atividades',
  templateUrl: './alunos-atividades.component.html',
  styleUrls: ['./alunos-atividades.component.css']
})
export class AlunosAtividadesComponent implements OnInit{

  public breadcrumb: any;

  ngOnInit() {
    this.breadcrumb = {
      mainlabel: 'Atividades Disponíveis',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/dashboard/sales'
        },
      
        {
          name: 'Atividades dos alunos',
          isLink: false,
          link: '#'
        }
      ]
    };
  }

}
