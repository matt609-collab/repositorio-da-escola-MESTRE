/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package org.matheusinc.projetomobileUM;

/**
 *
 * @author codespace
 */
public class ProjetoDeMobile {

    public static void main(String[] args) {
        int idade = 18;
        int quantidadeDePessoas = 10;
        if (idade >= 18) {
            System.out.println("Você pode entrar na festa, pois é de maior");
        } else {
            if(quantidadeDePessoas > 2) {
                System.out.println("Você pode entrar na festa, pois está acompanhado");
            } else {
                System.out.println("Desculpe, você não pode entrar na festa pois é menor e está sozinho.");
            }
        }
    }
}
