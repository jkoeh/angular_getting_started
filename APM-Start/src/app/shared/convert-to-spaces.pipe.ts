import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: "convertToSpaces"
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, ...args: string[]) {
        args.forEach(character =>{
            value = value.replace(character, ' ');
        });
        return value;
    }

}