import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class I18nService {

  private keystores: any = new Object();
  
  constructor() { }

  public init(keystores: any){
        for(let keystore of keystores){
            this.keystores[keystore.key] = keystore.translations;
        }
	}
	
	public getLabel(key: string, model: any){
		if(this.keystores[key]){
			let label = this.keystores[key]["en"];
			if(model){
				for(let [key, value] of Object.entries(model)){
					label.replace("${"+key+"}", value);
				}
			}
			return label;
		}
		return null;
	}
}
