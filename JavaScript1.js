function shownotificationforsubscriptionrenewal1() {
    var currentdate = new Date();
    var enddate = Xrm.Page.getAttribute("ntt_enddate").getValue();

    var diffintime = enddatetime - currentdate;
    var diffindays = diffintime / (1000 * 3600 * 24);

    if (enddate != null) {
        if (diffindays <= 30) {
            Xrm.Page.ui.setFormNotification("This subscription is due for renewal within " + diffindays + " days", "WARNING");
        } else {
            Xrm.Page.ui.clearFormNotification("WARNING");
        }
    }
}