import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema;
  listaTemas: Tema[]


  constructor(

    private router: Router,
    private temaService:TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){

      this.router.navigate(['/entrar'])
    }
    this.findAllTemas()
  }


  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp:Tema[])=>{
      this.listaTemas = resp
    })
  }
  
  
    cadastrar(){
      this.temaService.postTema(this.tema).subscribe((resp:Tema)=>{
        this.tema = resp
        alert("Tema cadastrado com sucesso!")
        this.findAllTemas()
        this.tema = new Tema()
      })
    }
  
}