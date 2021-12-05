/// <reference types="cypress" />

var Chance = require('chance');
const { last } = require('lodash');
var chance = new Chance()

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deveser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/')

        //Inputs de texto/ textarea/email -> type
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        //Inputs radio /checkboxes - check
        cy.get('input[value=n]').check()
       
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

                    
        //Inputs do tipo combobox - seletct
        cy.get('select#countries').select('Dinamarca', {force:true})
        cy.get('select#years').select('2008', {force:true})
        cy.get('select#months').select('Janeiro', {force:true})
        cy.get('select#days').select('10', {force:true})

        
        //input de senha - type
        cy.get('input#firstpassword').type('Alunos@2021')
        cy.get('input#secondpassword').type('Alunos@2021')

           //Input do tipo button - click
        cy.get('#submitbtn').click()

        /*Validação do cadastro
         Espero que a minha aplicação seja direcionada para a listagem
         url
         deve conter listagem
         */

         cy.url().should('contain', 'listagem')



    

        
    });
});