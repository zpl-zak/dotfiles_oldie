var LPIF={},g_popupfill_hint={},g_popupfill_hint_generate={},g_popupfill_hint_save={},g_popupfill_hint_type={},g_popupfill_last_active={},g_popupfill_last_active_fieldid={},g_popupfill_last_active_fieldtype={},g_popupfill_save_data={},g_popupfill_pw_challenge=null,g_popupforminput=[],g_popupform_active=[],g_popupform_active_choose=[],g_popupform_more_open=[],g_popupform_shownavbar=[],g_show_save_success_msg=!0,g_popup_tabid_save=null,g_popup_tab_docnum=[],g_popup_url_by_tabid=[],g_iframe_hack_src=
[];function savesiteicon_real(a){"undefined"!=typeof g_popup_tab_docnum[a]?sendCS(a,{cmd:"savesiteiframe"},g_popup_tab_docnum[a]):sendCS(a,{cmd:"savesiteiframe"});g_popup_tabid_save=a}function toplevelpopupsetstate(a,b){var c=b?1:0;null!=a?sendCS(a,{cmd:"toplevelpopupsetstate",toplevel_exists:c},"all"):get_selected_tab(null,function(a){a=gettabid(a);sendCS(a,{cmd:"toplevelpopupsetstate",toplevel_exists:c},"all")})}
function closepopuptoplevel_handler(a){null!=a?(closeclickables(a,!1),toplevelpopupsetstate(a,!1),clear_popup_heartbeat(a),delete g_iframe_hack_src[a]):(get_selected_tab(null,function(a){a=gettabid(a);closeclickables(a,!1);toplevelpopupsetstate(a,!1);clear_popup_heartbeat(a)}),g_iframe_hack_src=[])}
function createpopuptoplevel_handler(a,b){sendCS(a,{cmd:"createpopuptoplevel",from_iframe:b},g_CS_tops[a]);toplevelpopupsetstate(a,!0);g_iframe_hack_src[a]=b.url;has_popup_heartbeat(a)||(do_popup_heartbeat(a),popup_heartbeat_fn(a))}function do_getpopupfilldata(a){if(!a||!do_experimental_popupfill)return{};g_iframe_safe_to_close[a]=!0;return cobble_popup_iframe_data(a)}
function do_getpopupfillsites(a,b){if(!a||!b||!do_experimental_popupfill)return!1;var c=b.tld,g=b.url;verbose_log("get ste & form fill data for tld="+c+" url="+g+" docnum="+b.docnum);var d="",j="",e="";if((c=assemble_popup_data_payload(g,c))&&c.sites)d=c.sites;c&&c.favicons&&(j=c.favicons);c&&c.formfills&&(e=c.formfills);sendCS(a,{cmd:"gotpopupfillsites",sites:d,formfills:e,favicons:j},"all");return!0}
function do_setpopupfilllastactive(a,b){if(!a||!b||!do_experimental_popupfill)return!1;g_popupfill_last_active[a]=b.active;g_popupfill_last_active_fieldid[a]=b.activefieldid;g_popupfill_last_active_fieldtype[a]=b.activefieldtype;"undefined"!=typeof b.ask_generate&&(g_popupfill_hint_generate[a]=b.ask_generate);"undefined"!=typeof b.opentosave&&(g_popupfill_hint_save[a]=b.opentosave);"undefined"!=typeof b.start_type&&(g_popupfill_hint_type[a]=b.start_type);return!0}
function assemble_popup_data_payload(a,b){var c=[],g={},d={},j="",e="",k="",c="",j=[],l={};b||(b=lp_gettld_url(a));c=getsites(b);c=reorderOnURL(c,a,!0);for(e=0;e<c.length;e++)g[c[e].aid]=geticonurlfromrecord(c[e]),l[c[e].aid]=getbigiconurlfromrecord(c[e]);for(e=0;e<g_formfills.length;e++)if(check_ident_ffid(g_formfills[e].ffid)){j[j.length]=g_formfills[e];var n=lpmdec_acct(g_formfills[e].ccnum,!0,g_formfills[e],g_shares);g[g_formfills[e].ffid]=geticonCCnum(n);l[g_formfills[e].ffid]=geticonCCnum(n,
!0)}e=LPJSON.stringify("");j&&0<j.length&&(e=LPJSON.stringify(j));c=cache_usernames(c);j=e;e=LPJSON.stringify(g);g_40fieldicon&&(k=LPJSON.stringify(l));c&&(d.sites=c);j&&(d.formfills=j);e&&(d.favicons=e);k&&(d.bigicons=k);return d}
function cobble_popup_iframe_data(a){var b=LPJSON.stringify({}),c=LPJSON.stringify({}),g=LPJSON.stringify({}),d=LPJSON.stringify({}),j="",e=0,k=0,l="",n="";if(null!=a){null!=g_popupfill_hint[a]&&(null!=g_popupfill_last_active[a]&&null!=g_popupfill_hint[a][g_popupfill_last_active[a]])&&(j=g_popupfill_hint[a][g_popupfill_last_active[a]]);g_popupfill_hint_generate[a]&&(e=g_popupfill_hint_generate[a]);g_popupfill_hint_save[a]&&(k=g_popupfill_hint_save[a]);g_popupfill_hint_type[a]&&(n=g_popupfill_hint_type[a]);
"undefined"!=typeof g_popupfill_last_active_fieldtype[a]&&(l=g_popupfill_last_active_fieldtype[a]);var q=g_popup_url_by_tabid[a],h=assemble_popup_data_payload(q);h&&h.sites&&(b=h.sites);h&&h.favicons&&(c=h.favicons);h&&h.formfills&&(d=h.formfills);h&&h.bigicons&&(g=h.bigicons)}var e=e?1:0,k=k?1:0,h=can_copy_to_clipboard()?1:0,m={ff_firstname_regexp:get_ff_translation("ff_firstname_regexp"),ff_middlename_regexp:get_ff_translation("ff_middlename_regexp"),ff_lastname_regexp:get_ff_translation("ff_lastname_regexp"),
ff_username_regexp:get_ff_translation("ff_username_regexp"),ff_email_regexp:get_ff_translation("ff_email_regexp"),ff_zip_regexp:get_ff_translation("ff_zip_regexp"),ff_currpass_regexp:get_ff_translation("ff_currpass_regexp"),ff_search_regexp:get_ff_translation("ff_search_regexp"),ff_captcha_regexp:get_ff_translation("ff_captcha_regexp"),ff_bankacctnum_regexp:get_ff_translation("ff_bankacctnum_regexp"),ff_company_regexp:get_ff_translation("ff_company_regexp"),ff_password_regexp:get_ff_translation("ff_password_regexp"),
ff_question_answer_regexp:get_ff_translation("ff_question_answer_regexp"),ff_address1_regexp:get_ff_translation("ff_address1_regexp"),ff_city_regexp:get_ff_translation("ff_city_regexp"),ff_forgot_regexp:get_ff_translation("ff_forgot_regexp"),ff_country_regexp:get_ff_translation("ff_country_regexp")},f=get_sitepwlen(lp_gettld_url(q));if(null===f||"string"==typeof f)f=0;var p=-1;g_possiblemax_tuple!==[]&&g_possiblemax_tuple[0]==a&&(p=g_possiblemax_tuple[1],g_possiblemax_tuple=[]);return{cmd:"gotpopupfilldata",
sites:b,favicons:c,formfills:d,popuphtml:g_datacache[a].popuphtml,url:q,rowtype:j,ask_generate:e,can_copy_clipboard:h,username:g_username,inputtype:l,ask_save:k,maxpwlen:p,start_type:n,has_view_pw_challenge:g_prompts.view_pw_prompt?1:0,has_view_site_challenge:g_prompts.edit_site_prompt||g_prompts.company_copyview_site_prompt?1:0,has_view_ff_challenge:g_prompts.view_ff_prompt||g_prompts.company_copyview_site_prompt?1:0,site_pwlen:f,reg_obj:m,do_40fieldicon:g_40fieldicon,bigicons:g,ftd:frame_and_topdoc_has_same_domain(a),
enable_exper:g_isadmin||"undefined"!=typeof verbose&&verbose}}function doPopupIconHint(a,b,c){if(!a)return!1;sendCS(a,{cmd:"popupfilliconnumber",sitenumber:b,formfillsnumber:c},"all");return!0}function doPopupSaveOK(a){if(!a)return!1;sendCS(a,{cmd:"popupfillsaveok"},g_CS_tops[a]);return!0}
function savesite_from_iframe(a,b){if(!lploggedin)return null;var c=punycode.URLToASCII(a.url);g_popup_url_by_tabid[b]&&(c=g_popup_url_by_tabid[b]);if(!check_for_frame_mismatch_ok(b,!0,gs("Are you sure you would like to save a new site to your LastPass vault?"),"savesite"))return null;var g=a.formdata2,d=a.name,j=a.group,e=a.username,k=a.password,l=a.orig_username,n=a.orig_password,q=null!=g&&0<g.length?!0:!1,h=issharedfolder(g_shares,j);if(!checkreadonly(h))return{error:gs("Sorry, this shared folder is read-only.")};
var m=!1==h?g_local_key:h.sharekey,f=createNewAcct(),p=lp_gettld_url(AES._utf8_encode(c));f.genpw=!1;f.name=d;f.group=j;f.url=AES._utf8_encode(c);f.tld=p;f.unencryptedUsername=e;f.username=lpmenc(e,!0,m);f.password=lpmenc(k,!0,m);f.extra="";f.fav=0;f.autologin=0;f.never_autofill=0;f.pwprotect=0;f.aid="0";!1!=h&&(f.sharefolderid=h.id,0==h.give&&(f.sharedfromaid=1));p=j;h&&(p=j.substr(h.decsharename.length+1));f.fields=[];f.save_all=a.save_all?1:0;j=[];g=updateAndEncryptData(g,f.fields,j,f,m,{save_all:0,
username:l,password:n,new_username:e,new_password:k,fromiframe:1});d="name="+en(lpenc(d,m))+"&grouping="+en(lpenc(p,m))+"&data="+en(bin2hex(g))+"&extra="+en(lpenc("",m));d=d+"&extjs=1&localupdate=1"+(!1==h?"":"&sharedfolderid="+en(h.id));f.newvalues=j;q?(d+="&ref="+en(AES.url2hex(c)),saveSiteFromSubmit(d,f)):(d+="&aid=0",d+="&url="+en(AES.url2hex(c)),d+="&openid_url=",d+="&username="+en(crypto_btoa(f.username)),d+="&password="+en(crypto_btoa(f.password)),saveSite(d,f));"fidelity.com"==f.tld?refreshsites():
fill({tabid:b,acct:f,desc:"fill_A4"});return{}}var g_iframe_safe_to_close={};function savesite_dialog_changed_handler(a,b){"undefined"!=typeof b.value&&(g_iframe_safe_to_close[a]=b.value?!1:!0)}function iframe_close_request_handler(a){var b=0,b=g_iframe_safe_to_close&&g_iframe_safe_to_close[a]?4:g_iframe_safe_to_close&&!1===g_iframe_safe_to_close[a]&&lploggedin?1:7;sendCS(a,{cmd:"iframe_close_ack",value:b},"all");return b}
function do_popupfillscreateack(a){if(!a||!do_experimental_popupfill||!lploggedin)return!1;"undefined"!=typeof g_popup_tab_docnum[a]?sendCS(a,{cmd:"popupfillscreateack"},g_popup_tab_docnum[a]):sendCS(a,{cmd:"popupfillscreateack"},"all");has_popup_heartbeat(a)||(do_popup_heartbeat(a),popup_heartbeat_fn(a));return!0}
function do_iframescrollenable(a){if(!a)return!1;sendCS(a,{cmd:"iframescrollenable",href:data.href},g_CS_tops[a]);verbose_log("set scrolling=auto for iframe on tabid "+a);sendCS(a,{cmd:"iframebodyscrollenable",href:data.href},"all");return!0}function do_popupregister(a,b){if(!a||!b||!do_experimental_popupfill)return!1;g_popup_tab_docnum[a]=b.docnum;g_popup_url_by_tabid[a]=null!==a&&"undefined"!=typeof g_iframe_hack_src[a]?g_iframe_hack_src[a]:b.url;return!0}
function do_setpopupfillhint(a,b){if(!a||!b||!do_experimental_popupfill)return!1;if(null==b.formid||""==b.formid)b.formid="none";if(null==b.rowtype||""==b.rowtype)b.rowtype="sites";null==g_popupfill_hint[a]&&(g_popupfill_hint[a]={});g_popupfill_hint_generate[a]=b.ask_generate?b.ask_generate:!1;g_popupfill_hint[a][b.formid]=b.rowtype;verbose_log("["+a+"] set hint on "+b.formid+" to "+b.rowtype);return!0}
function do_popupfillinputsave(a,b){if(!a||!b||!do_experimental_popupfill)return!1;null==g_popupforminput&&(g_popupforminput={});null==g_popupforminput[a]&&(g_popupforminput[a]={});g_popupforminput[a].value=null==b.inputstr||0==b.inputstr.length?"":b.inputstr;g_popupforminput[a].id=null==b.inputid||0==b.inputid.length?"":b.inputid;g_popupforminput[a].issaveall=null==b.issaveall||0==b.issaveall.length?"":b.issaveall;g_popupforminput[a].inputtype=null==b.inputtype||0==b.inputtype.length?"":b.inputtype;
return!0}var g_popup_heartbeat={};function do_popup_heartbeat(a){g_popup_heartbeat||(g_popup_heartbeat={});return!a?!1:g_popup_heartbeat[a.toString()]=!0}function has_popup_heartbeat(a){return!g_popup_heartbeat?(g_popup_heartbeat={},!1):!a?!1:!0===g_popup_heartbeat[a.toString()]}function popup_heartbeat_fn(a,b){if(!a)return!1;b||(b=1);doPopupResize(a,-1,-1);return has_popup_heartbeat(a)?(setTimeout(function(){popup_heartbeat_fn(a,b+1)},1099),!0):!1}
function clear_popup_heartbeat(a){if(!a)return!1;g_popup_heartbeat||(g_popup_heartbeat={});g_popup_heartbeat[a.toString()]=!1;return!0}function closeclickables(a,b){var c=b?"true":"false";null!=a?sendCS(a,{cmd:"closeclickables",force:c,lploggedin:lploggedin},"all"):get_selected_tab(null,function(a){a=gettabid(a);sendCS(a,{cmd:"closeclickables",force:c,lploggedin:lploggedin},"all")});do_popupkbdnavreset(a)}
function closeallclickables(a){var b=a?"true":"false";get_all_windows({populate:!0},function(a){for(var g=0;g<a.length;g++)for(var d=0;d<get_tabs_length(a[g]);d++)sendCS(gettabid(get_tabs(a[g])[d]),{cmd:"closeclickables",force:b,lploggedin:lploggedin},"all")});clearpopupkbdcounters()}function doPopupResize(a,b,c){sendCS(a,{cmd:"popupfillresize",width:b,height:c},"all")}
function do_popupfillinputfocusdecrement(a,b){if(b&&do_experimental_popupfill){var c=1;"undefined"==typeof g_popupform_active[a]&&(g_popupform_active[a]=0);if("undefined"!=typeof b.count){var g=parseInt(b.count);isNaN(g)||(c=g)}g_popupform_active[a]-=c}}
function do_popupfillinputfocusincrement(a,b){if(b&&do_experimental_popupfill){var c=1;"undefined"==typeof g_popupform_active[a]&&(g_popupform_active[a]=0);if("undefined"!=typeof b.count){var g=parseInt(b.count);isNaN(g)||(c=g)}g_popupform_active[a]+=c}}function do_popupfillinputfocuschoose(a,b){b&&do_experimental_popupfill&&(g_popupform_active_choose[a]=1)}function do_popupfillinputmoreopen(a,b){b&&do_experimental_popupfill&&(g_popupform_more_open[a]=1)}
function do_popupfillinputshownavbar(a,b){b&&do_experimental_popupfill&&(g_popupform_shownavbar[a]=1)}function do_popupkbdnavreset(a){if(!a)return!1;g_popupform_active[a]=0;g_popupform_active_choose[a]=0;g_popupform_more_open[a]=0;g_popupform_shownavbar[a]=0;return!0}
function initpopupkbdcounters(a){if(!a)return!1;"undefined"==typeof g_popupform_active[a]&&(g_popupform_active[a]=0);"undefined"==typeof g_popupform_active_choose[a]&&(g_popupform_active_choose[a]=0);"undefined"==typeof g_popupform_more_open[a]&&(g_popupform_more_open[a]=0);"undefined"==typeof g_popupform_shownavbar[a]&&(g_popupform_shownavbar[a]=0);return!0}
function do_popupfillinputget(a){if(!a||!do_experimental_popupfill||!lploggedin)return{};var b={};initpopupkbdcounters(a);"undefined"==typeof g_popupforminput[a]&&(g_popupforminput[a]={value:"",id:"",issaveall:0,inputtype:""});"undefined"!=typeof g_popupforminput[a]&&(b={cmd:"gotpopupfillinput",inputstr:g_popupforminput[a].value,inputid:g_popupforminput[a].id,active:g_popupform_active[a],choose:g_popupform_active_choose[a],moreopen:g_popupform_more_open[a],issaveall:g_popupforminput[a].issaveall,
inputtype:g_popupforminput[a].inputtype,shownavbar:g_popupform_shownavbar[a]},do_popupkbdnavreset(a));return b}function clearpopupkbdcounters(){g_popupform_active=[];g_popupform_active_choose=[];g_popupform_more_open=[];g_popupform_shownavbar=[];return!0}
function do_popupfillsetgenerateprefs(a,b){if(!a||!b||!do_experimental_popupfill)return!1;var c=LPJSON.parse(b.prefstr);lpPutUserPref("generate_advanced",parseInt(c.generate_advanced));lpPutUserPref("generate_length",parseInt(c.generate_length));lpPutUserPref("generate_upper",parseInt(c.generate_upper));lpPutUserPref("generate_lower",parseInt(c.generate_lower));lpPutUserPref("generate_digits",parseInt(c.generate_digits));lpPutUserPref("generate_special",parseInt(c.generate_special));lpPutUserPref("generate_mindigits",
parseInt(c.generate_mindigits));lpPutUserPref("generate_ambig",parseInt(c.generate_ambig));lpPutUserPref("generate_reqevery",parseInt(c.generate_reqevery));lpPutUserPref("generate_pronounceable",parseInt(c.generate_pronounceable));if("undefined"!=typeof b.genpwstr&&(c=LPJSON.parse(b.genpwstr),null!=c&&!isEmptyObject(c))){g_genpws=[];for(var g in c)c.hasOwnProperty(g)&&g_genpws.push(c[g])}lpWriteAllPrefs();return!0}
function do_popupfillgetgenerateprefs(a,b){if(!a||!b||!do_experimental_popupfill)return{};var c=LPJSON.stringify({generate_advanced:parseInt(lpGetPref("generate_advanced",0)),generate_length:parseInt(lpGetPref("generate_length",12)),generate_upper:parseInt(lpGetPref("generate_upper",1)),generate_lower:parseInt(lpGetPref("generate_lower",1)),generate_digits:parseInt(lpGetPref("generate_digits",1)),generate_special:parseInt(lpGetPref("generate_special",0)),generate_mindigits:parseInt(lpGetPref("generate_mindigits",
1)),generate_ambig:parseInt(lpGetPref("generate_ambig",0)),generate_reqevery:parseInt(lpGetPref("generate_reqevery",1)),generate_pronounceable:parseInt(lpGetPref("generate_pronounceable",0))}),g=LPJSON.stringify(g_genpws),d="";g_generate_pw_pattern_hints&&((d=g_generate_pw_pattern_hints[a])||(d=""));d=LPJSON.stringify(d);return{prefstr:c,genpwstr:g,genpwpattern:d}};
