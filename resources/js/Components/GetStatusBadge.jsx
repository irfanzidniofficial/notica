import { STATUS } from "@/lib/utils";
import { Badge } from "@/Components/ui/badge";

export default function GetPriorityBadge({priority}){
    const {TODO, INPROGRESS, ONREVIEW, DONE, UNKNOWN} = STATUS;
    let badge, text;

    switch (priority) {
        case TODO:
            badge = 'bg-red-500 hover:bg-red'
            text= TODO;
            break;
        case INPROGRESS:
            badge = 'bg-yellow-500 hover:bg-yellow-600'
            text= INPROGRESS;
            break;
        case ONREVIEW:
            badge = 'bg-blue-500 hover:bg-blue-600'
            text= ONREVIEW;
            break;
        case ONREVIEW:
            badge = 'bg-green-500 hover:bg-green-600'
            text= ONREVIEW;
            break;
        default:
            badge = ''
            text= UNKNOWN;
            break;
    }

    return <Badge className={badge}>{text}</Badge>
}