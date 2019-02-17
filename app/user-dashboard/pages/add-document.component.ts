import { Component } from '@angular/core';
import { DocumentService } from './document-service';
import { Document } from './document';
@Component({
    selector: 'add-document',
    templateUrl: './add-document.component.html',
    styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css']
})

export class AddDocumentComponent {
    document: Document = new Document();
    response: string;
    constructor(private ms: DocumentService) {

    }
    add(mform) {
        this.ms.sendToServer(this.document).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

}