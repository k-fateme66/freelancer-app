import React from "react";
import { Switch } from "@headlessui/react";
function Toggle({ enabled, label, onChange }) {
  return (
    <Switch.Group>
      <div className="flex items-center gap-x-2">
        <Switch.Label className="mr-4 w-7">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-primary-600" : "bg-secondary-200"
          } relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default Toggle;
