import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor( private sanitizer:DomSanitizer){}
  transform(value: string, cityCode: string): any {
    
    if (cityCode === 'BOM' || cityCode === 'SYD') {
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">'+cityCode+'</div>');
    }
    else{
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:green">'+cityCode+'</div>');
    }

  }

}
