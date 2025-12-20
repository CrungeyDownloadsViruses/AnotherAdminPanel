package com.evilnotch.portforward;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

import com.dosse.upnp.UPnP;

public class MainJava
{
	public static void main(String[] args) throws NumberFormatException, IOException
	{
		File config = new File("port.txt");
		//write the config
		if(!config.exists())
		{
			config.createNewFile();
			BufferedWriter writer = new BufferedWriter(new FileWriter(config));
			writer.write("port=25565\r\n");
			writer.write("TCP=true\r\n");
			writer.write("openPort=true");
			writer.close();
		}
		//start the program
		BufferedReader reader = new BufferedReader(new FileReader(config));
		int port = Integer.parseInt(reader.readLine().trim().split("=")[1]);
		boolean tcp = Boolean.parseBoolean(reader.readLine().split("=")[1]);
		boolean openPort = Boolean.parseBoolean(reader.readLine().split("=")[1]);
		
		if(openPort)
		{
			System.out.println("Strating to open port:");
			boolean opened = tcp ? UPnP.openPortTCP(port) : UPnP.openPortUDP(port);
			System.out.println("port opened:" + opened + "\ton port:" + port + "\ttcp:" + tcp);
		}
		else
		{
			System.out.println("Strating to close port:");
			boolean closed = tcp ? UPnP.closePortTCP(port) : UPnP.closePortUDP(port);
			System.out.println("port closed:" + closed + "\ton port:" + port + "\ttcp:" + tcp);
		}
   }
 
    
   public static int getPort(Scanner scan) 
   {
	   System.out.print("Input port:");
	   return Integer.parseInt(scan.nextLine());
   }
   
 }