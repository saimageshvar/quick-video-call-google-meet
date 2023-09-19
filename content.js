function meetingClickHandler(event) {
  quickConnectFor(this);
}

function quickConnectFor(meetingElement) {
  const interval = setInterval(function() {
    try {
      const sendMessageButton = meetingElement.closest("c-wiz").querySelector('div[title="Send Message" i]')
      if(!sendMessageButton?.getAttribute('aria-disabled')) {
        sendMessageButton.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window }));
        sendMessageButton.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window }));
        clearInterval(interval)
      }
		} catch (err) {
			console.log("Error", err);
		}
	}, 100)
}

function entryPoint() {
  const interval = setInterval(function() {
    const newMeetingElements = [...document.querySelectorAll('[title="Add video meeting"]')];
    newMeetingElements.forEach(newMeetingElement => {
      if(newMeetingElement) {
        if(!newMeetingElement.dataset.cjsQuickMeetingInitialized) {
          newMeetingElement.classList.add("cjs-quick-meeting");
          newMeetingElement.addEventListener('click', meetingClickHandler)
          newMeetingElement.dataset.cjsQuickMeetingInitialized = true;
        }
      }
    })
  }, 500);
}
entryPoint();